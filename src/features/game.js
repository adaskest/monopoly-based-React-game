import {createSlice} from "@reduxjs/toolkit";

export const numSlice = createSlice({
    name: 'nums',
    initialState: {
        value: {
            numbers: [
                {number: 1, prise: (50 + Math.round(Math.random() * 250))},
                {number: 2, prise: (50 + Math.round(Math.random() * 250))},
                {number: 3, prise: (50 + Math.round(Math.random() * 250))},
                {number: 4, prise: (50 + Math.round(Math.random() * 250))},
                {number: 5, prise: (50 + Math.round(Math.random() * 250))},
                {number: 16, prise: (50 + Math.round(Math.random() * 250))},
                {number: 0, prise: (50 + Math.round(Math.random() * 250))},
                {number: 0, prise: (50 + Math.round(Math.random() * 250))},
                {number: 0, prise: (50 + Math.round(Math.random() * 250))},
                {number: 6, prise: (50 + Math.round(Math.random() * 250))},
                {number: 15, prise: (50 + Math.round(Math.random() * 250))},
                {number: 0, prise: (50 + Math.round(Math.random() * 250))},
                {number: 0, prise: (50 + Math.round(Math.random() * 250))},
                {number: 0, prise: (50 + Math.round(Math.random() * 250))},
                {number: 7, prise: (50 + Math.round(Math.random() * 250))},
                {number: 14, prise: (50 + Math.round(Math.random() * 250))},
                {number: 0, prise: (50 + Math.round(Math.random() * 250))},
                {number: 0, prise: (50 + Math.round(Math.random() * 250))},
                {number: 0, prise: (50 + Math.round(Math.random() * 250))},
                {number: 8, prise: (50 + Math.round(Math.random() * 250))},
                {number: 13, prise: (50 + Math.round(Math.random() * 250))},
                {number: 12, prise: (50 + Math.round(Math.random() * 250))},
                {number: 11, prise: (50 + Math.round(Math.random() * 250))},
                {number: 10, prise: (50 + Math.round(Math.random() * 250))},
                {number: 9, prise: (50 + Math.round(Math.random() * 250))},
            ]
        }
    },
})

export default numSlice.reducer