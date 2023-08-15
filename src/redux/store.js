import { configureStore } from '@reduxjs/toolkit'

import { reducer as ThemeReducer } from './theme/slice'

export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
  },
})
