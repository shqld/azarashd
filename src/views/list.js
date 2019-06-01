export const init = () =>
  customElements.define(
    'x-list',
    class ItemList extends HTMLElement {
      constructor() {
        super()

        this.itemTemplate = document.getElementById('item')
      }

      connectedCallback() {
        window.state.list.forEach(itemState => {
          const item = this.renderItem(itemState)
          this.appendChild(item)
        })
      }

      renderItem({ title, content }) {
        const item = document.createElement('x-item')
        item.dataset['title'] = title
        item.dataset['content'] = content

        return item
      }
    }
  )
