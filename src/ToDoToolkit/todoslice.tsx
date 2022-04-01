import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
    value: string[],
}

const initialState: TodoState = {
    value: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        add: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        remove: (state, action) => {
            state.value.splice(action.payload, 1)
            state.value = state.value
        },
        edit: (state, action) => {
            state.value[action.payload.ind] = action.payload.data
        }
    },
})

export const { add, remove, edit } = todoSlice.actions

export default todoSlice.reducer