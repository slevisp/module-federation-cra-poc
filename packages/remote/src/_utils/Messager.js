export default class Messager extends CustomEvent {
  messager = undefined

  constructor (value = '') {
    this.messager = new CustomEvent('POST_MESSAGE', {
      detail: {
        value
      }
    })
  }

  dispatch (domain = window) {
    domain.dispatchEvent(this.messager)
  }
}
