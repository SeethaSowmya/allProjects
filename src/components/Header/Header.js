import {Link} from 'react-router-dom'
import {NavElement, Logo} from './styledComponents'

const Header = () => (
  <NavElement>
    <Link to="/">
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </NavElement>
)

export default Header
