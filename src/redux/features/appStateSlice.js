import { createSlice } from "@reduxjs/toolkit"

export const appStateSlice = createSlice({
    name: 'AppState',
    initialState: {
        apiState: ''
    },
    reducers: {
        setAppState: (state, action) => {
            state.apiState = action.payload
        },

    }
})

export const {
    setAppState,
} = appStateSlice.actions

export default appStateSlice.reducer