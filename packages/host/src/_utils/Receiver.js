export default class Receiver {
  static listen (eventHandler) {
    const abortController = window.addEventListener('POST_MESSAGE', event => {
      const value = event?.detail?.value
      if (value && eventHandler) {
        eventHandler.call(this, [value])
      }
    })

    return abortController
  }
}
