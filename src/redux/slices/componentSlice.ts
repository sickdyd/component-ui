import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: State = {
  displayAddProperty: false,
  properties: []
}

export const componentSlice = createSlice({
  name: 'component',
  initialState: initialState,
  reducers: {
    showPropertyForm: (state: State, action: PayloadAction<boolean>) => {
      state.displayAddProperty = action.payload
    },
    saveProperty: (state: State, action: PayloadAction<Property>) => {
      state.properties.push(action.payload)
    }
  }
})

export const { showPropertyForm, saveProperty } = componentSlice.actions

export default componentSlice.reducer
