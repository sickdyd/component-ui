## Material UI Component Editor

This project allows to dynamically add properties to the Material UI `Button` component and see the changes in a preview.

The only Material UI component used is the `Button` in the preview, every other component is built from scratch.

## Screenshots

### Adding a new property

![adding](https://user-images.githubusercontent.com/45290018/158058207-0dcedd43-253e-478b-9501-94815942f268.gif)

### Editing an existing property

![editing](https://user-images.githubusercontent.com/45290018/158058294-99c49741-43b6-4615-b319-f55ab9965cb6.gif)

### Toggling properties

![toggling](https://user-images.githubusercontent.com/45290018/158058204-f7906c8e-bb60-4691-a37f-94cc7c573a58.gif)

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
