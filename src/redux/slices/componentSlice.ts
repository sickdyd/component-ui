import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ComponentState = {
  displayAddProperty: boolean
  properties: Property[]
}

const initialState: ComponentState = {
  displayAddProperty: false,
  properties: [
    {
      propertyName: 'Color',
      displayName: '',
      description: '',
      visible: true,
      propertyType: {
        type: 'one of',
        propertyControl: 'select',
        options: 'inherit,primary,secondary,success,error,info,warning',
        defaultValue: 'primary'
      }
    },
    {
      propertyName: 'Children',
      displayName: 'Children',
      description: 'To use a different element as children',
      visible: true,
      propertyType: {
        type: 'node',
        propertyControl: 'span',
        defaultValue: 'Sign Up'
      }
    },
    {
      propertyName: 'Disabled',
      displayName: 'Disabled',
      description: 'It disables the button',
      visible: false,
      propertyType: {
        type: 'boolean',
        defaultValue: true
      }
    },
    {
      propertyName: 'Disable focus ripple',
      displayName: 'Disabled focus ripple',
      description: 'It disables the focus ripple effect',
      visible: false,
      propertyType: {
        type: 'boolean',
        defaultValue: true
      }
    },
    {
      propertyName: 'Disable ripple',
      displayName: 'Disabled ripple',
      description: 'It disables the focus ripple effect',
      visible: false,
      propertyType: {
        type: 'boolean',
        defaultValue: true
      }
    },
    {
      propertyName: 'Full width',
      displayName: 'Full width',
      description: 'Expand to full width',
      visible: true,
      propertyType: {
        type: 'boolean',
        defaultValue: true
      }
    },
    {
      propertyName: 'Mini',
      displayName: 'Mini',
      description: 'Mini size',
      visible: false,
      propertyType: {
        type: 'boolean',
        defaultValue: true
      }
    },
    {
      propertyName: 'Size',
      displayName: 'Size',
      description: 'The button size',
      visible: true,
      propertyType: {
        type: 'one of',
        propertyControl: 'select',
        options: 'default,small,medium,large',
        defaultValue: 'large'
      }
    },
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
