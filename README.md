# Case Study

Hi,

this is my implementation for the case study `Notifications System` (see [here](./public/assets/case-study.pdf)).

## Basic Concepts

The implementation is a SPA based on `create-react-app` with `typescript` template. For realising the required icons, I decided to use `Material UI Icons`. By having to import the `@mui` package dependency, in the implementation I tried to use almost only the required Icons for keeping the usage small (bundling).

### Redux

As this should provide a notification system, that can be used within a whole connected application and developers can have easy access to it, i decided to use the `redux` store approach for controlling the notification flow.

```ts
const { addSuccessNotification } from 'src/store/actionCreators';

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

I tried to use a simple approach for realising the stackability of notifications by using a `fixed` positioned container that gets rendered last and inside using the `position: relative` fact for avoiding notification overlapping each other.

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

### Things to improve

I have left out some approaches from the typing power of `Typescript` making things more safe and also more precise to type....maybe you find out? One thing relates `tsconfig.json` and the other refers to `type Notification` ;)

Moreover a autohide could be implemented. With being able to add React Components as content for notification messages, there is a lot space for showing more options, cta to further actions for example. Also you can forward the onClose trigger for giving for Inversion of Control when using a notification.
