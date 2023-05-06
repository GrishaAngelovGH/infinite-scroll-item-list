import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk])

const store = mockStore({
  items: [
    { id: 123, title: 'Bluetooth Speaker', image: 'bluetooth-speaker.jpg', price: 123.45, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', number: 1 },
    { id: 234, title: 'Gamepad', image: 'gamepad.jpg', price: 234.56, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', number: 2 },
    { id: 345, title: 'Portable SSD', image: 'portable-ssd.jpg', price: 345.67, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', number: 3 },
    { id: 456, title: 'Laptop', image: 'laptop.jpg', price: 456.78, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', number: 4 },
    { id: 567, title: 'Smartwatch', image: 'smartwatch.jpg', price: 567.89, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', number: 5 },
    { id: 678, title: 'Wireless Headphones', image: 'wireless-headphones.jpg', price: 678.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', number: 6 }
  ]
})

export default store