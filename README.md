## Material UI Component Editor

This project allows to dynamically add properties to the Material UI `Button` component and see the changes in a preview.

The only Material UI component used is the `Button` in the preview, every other component is built from scratch.

## Screenshots

<img width="1193" alt="screenshot" src="https://user-images.githubusercontent.com/45290018/159118050-11ce6ade-276c-4fa6-bf71-9b04ea02f1ee.png">

![video](https://user-images.githubusercontent.com/45290018/159118051-a5ed2f6a-3eab-4247-b561-316658e72fe2.gif)

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
- [Redux](https://redux.js.org/)

## Installation

```
yarn install
```

or

```
npm install
```

## To start the project

```
yarn start
```

or

```
npm start
```
