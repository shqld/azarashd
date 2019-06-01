export const init = () =>
  customElements.define(
    'x-item',
    class Item extends HTMLElement {
      constructor() {
        super()

        this.itemTemplate = document.getElementById('item')
      }

      connectedCallback() {
        const { title, content } = this.dataset
        const templ = this.itemTemplate.content.cloneNode(true)

        templ.querySelector('h2').textContent = title
        templ.querySelector('div').textContent = content

        this.appendChild(templ)
      }
    }
  )
