import {createSlice} from "@reduxjs/toolkit";

export const twoSlice = createSlice({
    name: 'two',
    initialState: {
        value: {
            step: 1,
            money: 0,
            items: []
        }
    },
    reducers: {
        twoStep: ({value}, {payload}) => {
            value.step += payload
            if (value.step > 16) {
                value.step = value.step - 16
                value.money += 200
            }
        },
        twoBuy: ({value}, {payload}) => {
            value.items.push(payload.number)
            value.money -= payload.price
        },
        getTwoMoney: ({value}, {payload}) => {
            value.money += payload
        },
        loseTwoMoney: ({value}, {payload}) => {
            value.money -= payload
        },
    }
})

export const {twoStep, twoBuy, getTwoMoney, loseTwoMoney} = twoSlice.actions

export default twoSlice.reducer