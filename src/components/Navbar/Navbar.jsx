import React, { useEffect, useState } from 'react'
import cn from 'clsx'


import { styles } from '../../styles'
import { navLinks } from '../../consts/index'

import NavbarLogo from './NavbarLogo'
import NavigationPc from './NavigationPc'
import NavigationMobile from './NavigationMobile'
import NavbarSwitcher from './NavbarSwitcher'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [isMenu, setIsMenu] = useState(false)
  const [isFixedHeader, setIsFixedHeader] = useState(false)

  const onChangeActive = active => {
    setIsMenu(false)
    setActive(active)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixedHeader(true)
      } else {
        setIsFixedHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={cn(
        `
  ${styles.paddingX}
  z-20
  w-full
  py-4
  transition-all
  delay-200
  ease-in-out
  `,
        isFixedHeader ? 'fixed top-0 bg-[#FAF7E8] shadow-xl dark:bg-primary' : 'top-[-250px]'
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <NavbarLogo />
        <NavbarSwitcher />
        <NavigationPc active={active} navLinks={navLinks} onChangeActive={onChangeActive} />
        <NavigationMobile
          onChangeActive={onChangeActive}
          navLinks={navLinks}
          isMenu={isMenu}
          active={active}
          setIsMenu={setIsMenu}
        />
      </div>
    </nav>
  )
}

export default Navbar
