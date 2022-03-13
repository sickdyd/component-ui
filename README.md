## Material UI Component Editor

This project allows to dynamically add properties to the Material UI `Button` component and see the changes in a preview.

The only Material UI component used is the `Button` in the preview, every other component is built from scratch.

## Screenshots

### Adding a new property

![adding](https://user-images.githubusercontent.com/45290018/158057868-639e2ec7-6f74-4c87-9810-a5f9948c8979.gif)

### Editing an existing property

![editing](https://user-images.githubusercontent.com/45290018/158057872-0a056dd1-1521-466d-bd47-cdd1674c520e.gif)

### Toggling properties

![toggling](https://user-images.githubusercontent.com/45290018/158057875-0c7ac114-2156-4c9d-89f3-d74f180d3bcb.gif)

## Features

Once opened a default set of properties will be loaded. Add any property and customize its setting via the property form.

- By toggling visibility it will show/hide the effects of the property on the component
- Click on the `Add new property` link to add a new property
- The `Property name` will be the name of the `prop` passed to the component
- If a property is named `Children` it will be passed as `children` to the component

## Tech/framework used

<b>Built with</b>

- [React](https://react.org)
- [emotion](https://emotion.sh)

## Installation

```
yarn install
```

or

```
npm install
```
