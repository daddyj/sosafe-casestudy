# Case Study

Hi,

this is my implementation for the case study `Notifications System` (see [here](./public/assets/case-study.pdf)).  
Demo can be found here: https://sosafe-casestudy.vercel.app/

## Basic Concepts

The implementation is a SPA based on `create-react-app` with `typescript` template. For realising the required icons, I decided to use `Material UI Icons`. By having to import the `@mui` package dependency, in the implementation I tried to use almost only the required Icons for keeping the usage small (for bundling improvement for example).

### Redux

As this should provide a notification system, that can be used within a whole connected application and for better dev experience (accessibility + readability) to it, i decided to use the `redux` store approach for controlling the notification flow. So the developer needs to use the `dispatch` function given with `react-redux` with using the appropriate `actionCreator` for triggering the notification, see:

```ts
import {
    addSuccessNotification,
    addInfoNotification,
    addWarningNotification,
    addErrorNotification,
} from 'src/store/actionCreators';
import { useDispatch } from "react-redux";

// Example
const MyComponent: React.FC<any> = () => {
    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            dispatch(addSuccessNotification(message));
            dispatch(addInfoNotification(message));
            dispatch(addWarningNotification(message));
            dispatch(addErrorNotification(message));
        }}>

    )
}
```

### Stackability

I tried using a simple approach for realising the stackability of notifications by using a `fixed` positioned container that gets rendered last and inside rendering as `relative` children. The design suggestion here is rendering notifications from bottom(-left) to top(-left).

This is the main container where notifications get rendered from bottom-left to top-left, overlaying the application as defined:

```css
.notifications-wrapper {
  position: absolute;
  bottom: 5vh;
  left: 5vw;
  width: 50%;
  display: flex;
  flex-direction: column-reverse;
}
```

A notification then is simply a `div` in the `flex`-based parent container:

```css
.notification-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0.25rem 0;
  border-radius: 0.25rem;
  width: 100%;
}
```

### Simple Modal

Basic modal implementation is also given, see:

```ts
import { addModal } from "src/store/actionCreators";

// Example
const MyComponent: React.FC<any> = () => {
    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            dispatch(addModal(
                <div>
                    Here I can place custom content
                </div>)
            );
        }}>

    )
}
```

## Things to improve

An autohide could be implemented. With already being able to add React Components as content for notification messages, there is a lot space for showing more options, cta to further actions for example.  
Also you can forward the onClose trigger for giving more Inversion of Control when using a notification.

## Technical debt

There is already some technical debt :) , as this was rapid development based on a time scope. Some types still need to be added as there is the use of `any` types. Tests are also open.
