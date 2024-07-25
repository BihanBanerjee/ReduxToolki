import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    // reducer: { todoReducer }
    // we can also do this:->
    // reducer: { todoo: todoReducer } In this case to access the data, I should have done this:-> const todos = useSelector(store => store.todoo.todos); 
    reducer: todoReducer 
});

// If I have multiple reducers then it is recommended to pass in all the 
// reducers inside curly braces as an object. like this :->
// reducer: { todoReducer } 
// when I will access the data of the store using useSelector hook in the 
// components then I will have two cases:->
    // 1. I have a single reducer and I am not passing that inside curly braces
        // i.e. like this :-> reducer: todoReducer
    // 2. I have multiple reducers and I am passing them inside curly braces
        // i.e. like this :-> reducer: { todoReducer, cartReducer, userReducer }

// In case 1 access like this:-> const todos = useSelector( store => store.todos )
// In case 2 access like this:-> const todos = useSelector( store => store.todoReducer.todos )
// In case 2 access like this:-> const users = useSelector( store => store.userReducers.users ) etc. etc.
