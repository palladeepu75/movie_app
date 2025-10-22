import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:[],
    searchValue:'',
    types:[]
}

const movieSlice= createSlice({
    name:"movies",
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.movies=action.payload
        },
        setSearchValue:(state,action)=>{
            state.searchValue=action.payload
        },
        setTypes:(state,action)=>{
            state.types=action.payload
        }
    }
})

export const {setMovies,setSearchValue,setTypes}=movieSlice.actions

export default movieSlice.reducer
