/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly APP_BASE_PATH: `/${string}/` | undefined
  }
}
