import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ComponentState = {
  displayAddProperty: boolean
  properties: Property[]
}

const initialState: ComponentState = {
  displayAddProperty: false,
  properties: [
    {
      propertyName: 'Variant',
      displayName: 'Variant',
      description: 'The component variant',
      visible: true,
      propertyType: {
        type: 'one of',
        propertyControl: 'select',
        options: 'contained,outlined,text',
        defaultValue: 'contained'
      }
    },
    {
      propertyName: 'Color',
      displayName: 'Color',
      description: 'The text color',
      visible: true,
      propertyType: {
        type: 'one of',
        propertyControl: 'select',
        options: 'inherit,primary,secondary,success,error,info,warning',
        defaultValue: 'success'
      }
    }
  ]
}

export const componentSlice = createSlice({
  name: 'component',
  initialState,
  reducers: {
    showPropertyForm: (state: ComponentState, action: PayloadAction<boolean>) => {
      state.displayAddProperty = action.payload
    },
    addProperty: (state: ComponentState, action: PayloadAction<Property | undefined>) => {
      action.payload && state.properties.push(action.payload)
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
