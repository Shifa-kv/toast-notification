# React Toast Notification System

This project implements a flexible and reusable toast notification system for React applications using the Context API.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Features

* **Global Toast Management:** Uses React's Context API to easily manage and display toast messages from any component.
* **Customizable Toasts:** Allows for customization of toast content, type (success, error, warning, info), duration, and styling.
* **Dismissable Toasts:** Provides an option to make toasts dismissable by the user.
* **Automatic Removal:** Toasts can be configured to automatically disappear after a specified duration.
* **Unique IDs:** Each toast is assigned a unique ID for proper tracking and removal.
* **Tailwind CSS Friendly:** uses tailwind classes for easy styling.

## Usage

### `useToastMessage`

* A custom hook that provides access to the `addToast` function.
* Use the `useToastMessage` hook in any component where you want to display a toast:**

    ```javascript
    import React from 'react';
    import { useToastMessage } from './components/notifications/ToastProvider';

    function MyComponent() {
      const { addToast } = useToastMessage();

      const handleClick = () => {
        addToast({
          content: 'This is a success toast!',
          type: 'success',
          duration: 3000, // 3 seconds
          dismissable: true,
        });
      };

      return (
        <button onClick={handleClick}>Show Toast</button>
      );
    }

    export default MyComponent;
    ```

### `addToast(props)`

* Adds a new toast message.
* `props` object:
    * `content` (required): The content of the toast (string or JSX).
    * `type` (optional): The type of toast ('success', 'error', 'warning', 'info'). Defaults to 'info'.
    * `duration` (optional): The duration in milliseconds before the toast disappears. If set to 0, it will not disappear automatically. Defaults to 8000.
    * `dismissable` (optional): Whether the toast can be dismissed by the user. Defaults to false.
    * `color` (optional): An object to override the default colors. {background: '#...', text: '#...', border:'#...'}
    * `icon` (optional): a custom image to use as the icon.
    * `action` (optional): a function that is ran when the toast is clicked.

### `ToastMessage`

* Renders an individual toast message.
* Receives props from the `ToastMessageProvider`.
* Includes a close button if `dismissable` is true.

## Styling

* The component uses Tailwind CSS for basic styling. You can customize the styles by modifying the Tailwind CSS classes in the `ToastMessage.js` file.
* You can override the default colors of the toast by providing a color object to the addToast function.

## Contributing


## License

