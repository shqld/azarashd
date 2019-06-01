import * as List from '/views/list.js'
import * as Item from '/views/item.js'

document.addEventListener('DOMContentLoaded', () => {
  List.init()
  Item.init()
})

window.addEventListener('load', async () => {
  try {
    const registration = await navigator.serviceWorker.register('/sw.js')
    // console.log(registration)
  } catch (err) {
    console.error(err)
  }
})
