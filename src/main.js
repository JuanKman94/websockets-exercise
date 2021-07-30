window.addEventListener('DOMContentLoaded', init)

function onWSOpen(ev) {
  console.info('onWSOpen: connected socket to', this.url)

  this.onmessage = onMessage
}

function onMessage(ev) {
  const li = document.createElement('li')
  const msg = ev.data

  li.textContent = ev.data
  document.getElementById('message_log')?.prepend(li)
}

function init() {
  document.forms.message.addEventListener('submit', (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    const msg = ev.target.msg.value

    window.saludoWs.send(msg)
  })

  document.forms.ws_url.addEventListener('submit', (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    const url = ev.target.ws_url.value
    const protocol = ev.target.protocol.value

    window.saludoWs = new WebSocket(url, protocol.split(','))
    window.saludoWs.onopen = onWSOpen
  })
}
