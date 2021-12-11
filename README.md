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
