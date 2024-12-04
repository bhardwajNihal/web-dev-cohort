-> About other state management library - Redux-toolkit

- Creating a simple counter application using redux : 
    1. initialize a vite project
    2. npm install react-redux @reduxjs/toolkit
        Complete Flow
            1. Define a store to hold the state.
            2. Create a slice to manage actions and reducers.
            3. Use Provider to wrap the app with the store.
            4. Access state with useSelector and update it with useDispatch.
        How They Work Together:
            Action: A user clicks a button, triggering an action (e.g., increment).
            Reducer: The reducer takes the current state and the action and calculates the new state.
            Store: The store updates the state with the new value.
            Slice: Organizes this process by managing the state, actions, and reducers for a specific feature.
