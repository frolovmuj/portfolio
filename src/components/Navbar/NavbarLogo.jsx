import { Link } from 'react-router-dom'

import { logo } from '../../assets'

const NavbarLogo = () => {
  return (
    <div>
      <Link
        onClick={() => {
          onChangeActive('')
          window.scrollTo(0, 0)
        }}
        className="flex items-center gap-2"
        to="/"
      >
        <img width={40} height={40} src={logo} alt="logo" />
        <h1 className="text-2xl font-extrabold text-black dark:text-white">
          Alex <span className="hidden sm:inline-block">| Web Developer</span>
        </h1>
      </Link>
    </div>
  )
}

export default NavbarLogo
