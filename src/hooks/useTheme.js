import { useEffect, useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { themeActions } from '../redux/theme/slice'
import { selectTheme } from '../redux/theme/selectors'

export const useTheme = () => {
  const dispatch = useDispatch()

  const theme = useSelector(selectTheme)

  const setTheme = useCallback(
    theme => {
      theme === 'dark'
        ? (dispatch(themeActions.changeTheme('light')), localStorage.setItem('darkMode', 'light'))
        : (dispatch(themeActions.changeTheme('dark')), localStorage.setItem('darkMode', 'dark'))
    },
    [theme]
  )

  useEffect(() => {
    localStorage.getItem('darkMode') === 'dark'
      ? (dispatch(themeActions.changeTheme('dark')), document.documentElement.classList.add('dark'))
      : (dispatch(themeActions.changeTheme('light')), document.documentElement.classList.remove('dark'))
  }, [theme])

  return [theme, setTheme]
}
