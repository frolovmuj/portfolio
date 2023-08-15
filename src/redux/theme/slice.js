import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'dark',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, actions) {
      state.theme = actions.payload
    },
  },
})

export const { reducer, actions: themeActions } = themeSlice
