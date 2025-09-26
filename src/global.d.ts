export {}

declare global {
  function __(text: string): string

  interface Window {
    socketio_port: string
  }

  interface String {
    format(...args: any[]): string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    __: (text: string) => string
  }
}