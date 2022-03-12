import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ComponentState = {
  displayAddProperty: boolean
  properties: Property[]
}

const initialState: ComponentState = {
  displayAddProperty: false,
  properties: []
}

export const componentSlice = createSlice({
  name: 'component',
  initialState: initialState,
  reducers: {
    showPropertyForm: (state: ComponentState, action: PayloadAction<boolean>) => {
      state.displayAddProperty = action.payload
    },
    saveProperty: (state: ComponentState, action: PayloadAction<Property>) => {
      state.properties.push(action.payload)
    }
  }
})

export const { showPropertyForm, saveProperty } = componentSlice.actions

export default componentSlice.reducer
