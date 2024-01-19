# 音视频播放

## 浏览器自动播放策略

基于改善用户体验、减少带宽数据消耗，浏览器默认对自动播放视频执行限制策略，需开发者自行处理相关功能：

- 用户触发互动事件（`click`、`pointerMove`等）后可进行媒体元素的自动播放

- **Chrome**、**Safari** 仅允许静音 `muted=true` 进行自动播放

- **Chrome** 中可授权 `<iframe>` 进行自动播放

```html
<iframe src="Uri" allow="autoplay"></iframe>
```

::: details Chrome - 媒体互动指数

可以通过提高 _媒体互动指数(**MEI**)_ 解锁自动播放限制，如 [抖音](https://www.douyin.com/) 等视频平台可作为视频平台项目的参考

- 媒体（音频/视频）的用时必须超过 7 秒。
- 音频必须存在且已取消静音。
- 包含该视频的标签页处于有效状态。
- 视频的尺寸（以像素为单位）必须大于 200x140。

:::

:::tip

- [Chrome | Autoplay policy](https://developer.chrome.com/blog/autoplay?hl=zh-cn)
- [Safari | Enable Video Autoplay](https://developer.apple.com/documentation/webkit/delivering_video_content_for_safari/)
- [Opera | Autoplay, Go Away!](https://dev.opera.com/blog/autoplay-go-away/)
  :::

## 无缝循环播放音频

```html
<audio loop src="audio source" />
```

循环播放音频会发现并不流畅，每次循环播放之间会有一定的延迟，影响用户体验

可以通过 [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) 优化此场景：

```ts
const handleAudioPlay = async () => {
  const response = await fetch('audio source', { method: 'GET' })
  const arrayBuffer = await response.arrayBuffer()

  const audioContext = new AudioContext()
  audioContext.decodeAudioData(arrayBuffer, buffer => {
    const source = audioContext.createBufferSource()

    source.buffer = buffer
    source.connect(audioContext.destination)

    source.loop = true
    source.start()
  })
}
```

对于不支持 [Web Audio API](https://caniuse.com/?search=Web%20Audio%20API) 的浏览器（_**IE**：hello_）可考虑以下兼容方式

```ts
const App = () => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const onTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current!

    const THRESHOLD_LOOP_EXP = 0.4 // 根据实际场景自行调整此经验值

    if (currentTime > duration - loopThreshold) {
      audioRef.current!.pause()
      audioRef.current!.currentTime = 0
      audioRef.current!.play()
    }
  }

  return <audio ref={audioRef} onTimeUpdate={onTimeUpdate} src="audio source" />
}
```

:::tip 参阅

- [stackoverflow | Create Seamless Loop of Audio - Web](https://stackoverflow.com/questions/46926033/create-seamless-loop-of-audio-web)
- [stackoverflow | gapless looping audio html5](https://stackoverflow.com/questions/7330023/gapless-looping-audio-html5)
  :::

## 无缝切换播放视频

```tsx
const App = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const onEnded = () => {
    videoRef.current!.src = 'new source'
    videoRef.current!.play()
  }

  return <video ref={videoRef} onEnded={onEnded} src="video source" />
}
```

在浏览器中单标签进行视频播放时，可以看出视频切换时有明显的闪动，尝试了 [video.js](https://github.com/videojs/video.js) 等第三方库也没能解决此问题。

因为在切换视频时，相当于先删除旧视频源，再添加新视频源：

```js
/* 伪代码 */
const toggleVideo = newSource => {
  video.src = ''
  window.requestAnimationFrame(() => {
    video.src = newSource
  })
}
```

因此在切换视频时修改封面图为新视频源的第一帧可以优化这个闪动效果：

```ts
const drawVideoFrame = (video: HTMLVideoElement, outputType = 'image/jpeg') => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!

  canvas.width = video.width
  canvas.height = video.height

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

  return canvas.toDataURL(outputType)
}

const getVideoFirstFrame = async (url: string): Promise<string> => {
  return new Promise(resolve => {
    const video = document.createElement('video')
    video.src = url
    video.crossOrigin = 'anonymous'

    video.onloadedmetadata = () => {
      video.currentTime = 0

      video.onseeked = () => {
        const frame = drawVideoFrame(video)
        resolve(frame)
        video.src = ''
      }

      video.play()
    }

    video.onerror = err => {
      console.error('加载视频失败 ', err)
      resolve('')
    }
  })
}
```

而若想要更加平滑自然的切换效果，目前实践下来的最佳方案是多 `<video>` 标签配合 `CSS3` 动画做过渡：

::: code-group

```tsx [React]
const videoList = ['source1', 'source2', 'source3']

const App = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [current, updateCurrent] = useState(0)

  const onEnded = () => {
    updateCurrent(prev => (prev >= videoList.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      {videoList.map((source, index) => (
        <video
          className={['video', current === index ? 'show' : 'hide'].join(' ')}
          ref={videoRef}
          src={source}
          preload="auto"
          onEnded={onEnded}
        />
      ))}
    </>
  )
}
```

```CSS
video {
  transition: opacity 0.3s linear;
}
.show {
  display: block;
  opacity: 1;
}
.hide {
  display: none;
  opacity: 0;
}
```

:::tip

- 此实践方案立足于预加载/懒加载视频资源

- 当资源列表过长时，应考虑过多节点带来的性能问题，可考虑类似虚拟列表的做法

:::

:::tip 参阅
[stackoverflow | HTML5 Video - How to do a seamless play and/or loop of several videos?](https://stackoverflow.com/questions/34097834/html5-video-how-to-do-a-seamless-play-and-or-loop-of-several-videos)
:::
