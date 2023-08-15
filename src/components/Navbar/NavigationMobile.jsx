import { useRef, useEffect } from 'react'
import { FaHamburger } from 'react-icons/fa'
import cn from 'clsx'
import { useSelector } from 'react-redux'

import { selectTheme } from '../../redux/theme/selectors'

const NavigationMobile = ({ isMenu, active, onChangeActive, setIsMenu, navLinks }) => {
  const refMenu = useRef(null)

  const theme = useSelector(selectTheme)

  const onChangeIsMenu = () => setIsMenu(!isMenu)

  useEffect(() => {
    const onClicked = e => {
      if (refMenu && refMenu.current && refMenu.current instanceof Node && !refMenu.current.contains(e.target)) {
        setIsMenu(false)
      }
    }

    document.addEventListener('click', onClicked)

    return () => removeEventListener('click', onClicked)
  }, [])

  return (
    <div ref={refMenu} className="relative flex flex-col md:hidden">
      <button onClick={onChangeIsMenu}>
        <FaHamburger color={theme === 'dark' ? 'white' : 'black'} size={25} />
      </button>
      <div
        className={cn(
          'absolute right-1 top-9 z-20 rounded-md bg-white p-5 dark:bg-slate-800',
          isMenu ? 'flex' : 'hidden'
        )}
      >
        <ul className="flex flex-col items-center justify-center gap-5">
          {navLinks.map(link => (
            <li
              className={cn(
                'text-l font-bold hover:text-black dark:hover:text-white',
                active === link.id ? 'text-white' : 'text-secondary'
              )}
              onClick={() => {
                onChangeActive(link.id)
              }}
              key={link.id}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavigationMobile
