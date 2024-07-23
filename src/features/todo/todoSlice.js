import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello", isCompleted: false}],
}

// const sayHello = () => {
//     console.log("Hello");
// }

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // addTodo: sayHello
        addToodo: ( state, action ) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload
            const todo = state.todos.find((todo) => todo.id === id)
            if (todo) {
                todo.text = text
            }
        }
    }
})

export const { addToodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
