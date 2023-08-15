import cn from 'clsx'
import { BsSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from '../../hooks/useTheme'

const NavbarSwitcher = () => {
  const [theme, setTheme] = useTheme()

  const onChangeTheme = () => {
    setTheme(theme)
  }

  return (
    <div className="ml-auto mr-[10px] cursor-pointer">
      <div
        onClick={onChangeTheme}
        className="relative flex  h-[35px] w-[70px] items-center rounded-xl border-2  border-gray-600 bg-[#FAF7E8] dark:border-blue-50 dark:bg-black"
      >
        <div
          className={cn(
            'absolute h-full w-[30px] rounded-[8px] bg-[#915eff] transition-all delay-150',
            theme === 'dark' ? 'left-0' : 'right-0'
          )}
        ></div>

        {theme === 'dark' ? (
          <BsFillMoonFill className="relative z-20 ml-[5px] mr-auto" size={20} />
        ) : (
          <BsSunFill className="relative z-20 ml-auto mr-[5px]" size={20} />
        )}
      </div>
    </div>
  )
}

export default NavbarSwitcher
