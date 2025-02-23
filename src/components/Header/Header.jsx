import { scrollIcon } from 'icons'
import './Header.scss'

const Header = () => (
  <div className='header'>
    <h1 className='m-0'>Infinite Scroll Item List</h1>
    <img src={scrollIcon} width={70} />
  </div>
)

export default Header