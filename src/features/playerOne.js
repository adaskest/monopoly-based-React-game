import {createSlice} from "@reduxjs/toolkit";

export const oneSlice = createSlice({
    name: 'one',
    initialState: {
        value: {
            step: 1,
            money: 0,
            items: []
        }
    },
    reducers: {
        oneStep: ({value}, {payload}) => {
            value.step += payload
            if (value.step > 16) {
                value.step = value.step - 16
                value.money += 200
            }
        },
        oneBuy: ({value}, {payload}) => {
            value.items.push(payload.number)
            value.money -= payload.price
        },
        getOneMoney: ({value}, {payload}) => {
            value.money += payload
        },
        loseOneMoney: ({value}, {payload}) => {
            value.money -= payload
        },
    }
})

export const {oneStep, oneBuy, getOneMoney, loseOneMoney} = oneSlice.actions

export default oneSlice.reducer