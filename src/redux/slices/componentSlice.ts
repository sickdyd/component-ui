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
    addProperty: (state: ComponentState, action: PayloadAction<Property>) => {
      state.properties.push(action.payload)
    },
    updateProperty: (
      state: ComponentState,
      action: PayloadAction<{ index: number; property: Property }>
    ) => {
      state.properties[action.payload.index] = action.payload.property
    },
    deleteProperty: (state: ComponentState, action: PayloadAction<number>) => {
      state.properties = state.properties.filter((_, index) => index !== action.payload)
    }
  }
})

export const { showPropertyForm, addProperty, updateProperty, deleteProperty } =
  componentSlice.actions

export default componentSlice.reducer
