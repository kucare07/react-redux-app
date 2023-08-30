import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movieListing",
    initialState,
    reducers: {
        addMovie: (State, action) => {
            state.movie = action.payload
        }
    }
})

export const { addMovie } = movieSlice.actions
export default movieSlice.reducer