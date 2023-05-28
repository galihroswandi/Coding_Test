import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "data",
    initialState: {
        hide: '',
        point: '',
        finalPoint: 0,
        dataRandom: []
    },
    reducers: {
        setHide: (state, action) => {
            state.hide = action.payload
        },
        setPoint: (state, action) => {
            state.point = action.payload
        },
        setFinalPoint: (state, action) => {
            state.finalPoint = action.payload
        },
        setDataRandom: (state, action) => {
            state.dataRandom = action.payload
        }
    }
})

export const { setHide, setPoint, setFinalPoint, setDataRandom } = mainSlice.actions;
export default mainSlice.reducer;