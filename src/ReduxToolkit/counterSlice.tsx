import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number,
    calculate:string,
    CalcAns:number
}

const initialState: CounterState = {
    value: 0,
    calculate:"",
    CalcAns: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        add: (state, action) => {
            state.value += action.payload
        },
        remove:(state, action) => {
            state.value -= action.payload
        },
        incrementByAMount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        calculate:(state, action) => {
            state.calculate = action.payload
        },
        CalcAns:(state) => {
            state.CalcAns = eval(state.calculate)
        }
    },
})

export const { increment, decrement, incrementByAMount, add, remove, calculate, CalcAns } = counterSlice.actions

export default counterSlice.reducer