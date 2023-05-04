import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

const getRandomPrice = (min = 100, max = 1000) => {
  const randomFloat = Math.random() * (max - min) + min

  return parseFloat(randomFloat.toFixed(2))
}

const items = [
  { title: 'Bluetooth Speaker', image: 'bluetooth-speaker.jpg', price: getRandomPrice(), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { title: 'Gamepad', image: 'gamepad.jpg', price: getRandomPrice(), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { title: 'Portable SSD', image: 'portable-ssd.jpg', price: getRandomPrice(), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { title: 'Smartphone', image: 'smartphone.jpg', price: getRandomPrice(), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { title: 'Smartwatch', image: 'smartwatch.jpg', price: getRandomPrice(), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { title: 'Wireless Headphones', image: 'wireless-headphones.jpg', price: getRandomPrice(), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
]

const size = 6

window.localStorage.setItem('start', 1)
window.localStorage.setItem('end', size)

const generateItems = () => {
  const start = parseInt(window.localStorage.getItem('start'))
  const end = parseInt(window.localStorage.getItem('end'))

  const newItems = []

  for (let i = start; i <= end; i++) {
    const index = Math.floor(Math.random() * items.length)
    const item = { ...items[index] }
    const id = window.crypto.randomUUID()

    item.id = id
    item.title = item.title.concat(` ${id.split('-')[0]}`.toUpperCase())
    item.number = i

    newItems.push(item)
  }

  const newStart = end + 1
  const newEnd = (newStart + size) - 1

  window.localStorage.setItem('start', newStart)
  window.localStorage.setItem('end', newEnd)

  return newItems
}

mock.onGet('/items').reply(() => {
  const newItems = generateItems()

  return [
    200,
    {
      items: newItems
    }
  ]
})