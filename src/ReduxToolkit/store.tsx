import { configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import todoslice from "../ToDoToolkit/todoslice";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        todo: todoslice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch