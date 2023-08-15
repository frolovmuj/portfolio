import cn from 'clsx'

const NavigationPc = ({ navLinks, onChangeActive, active }) => {
  return (
    <ul className="hidden items-center justify-center gap-4 md:flex">
      {navLinks.map(link => (
        <li
          className={cn(
            'text-xl font-bold hover:text-black dark:hover:text-white',
            active === link.id ? 'dark:text-white text-black' : 'text-secondary'
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
  )
}

export default NavigationPc
