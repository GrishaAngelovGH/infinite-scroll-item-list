import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk])

const store = mockStore({
  items: {
    123: { id: 123, title: 'Bluetooth Speaker', image: 'bluetooth-speaker.jpg', price: 123.45, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', number: 1, isFavorite: true },
    234: { id: 234, title: 'Gamepad', image: 'gamepad.jpg', price: 234.56, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', number: 2, isFavorite: true },
    345: { id: 345, title: 'Portable SSD', image: 'portable-ssd.jpg', price: 345.67, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', number: 3, isFavorite: false },
    456: { id: 456, title: 'Laptop', image: 'laptop.jpg', price: 456.78, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', number: 4, isFavorite: false },
    567: { id: 567, title: 'Smartwatch', image: 'smartwatch.jpg', price: 567.89, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', number: 5, isFavorite: false },
    678: { id: 678, title: 'Wireless Headphones', image: 'wireless-headphones.jpg', price: 678.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', number: 6, isFavorite: false }
  },
  filters: {
    criteria: '',
    price: 1000
  }
})

export default store