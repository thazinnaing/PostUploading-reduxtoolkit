import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id: '1', title: 'Learn Redux Toolkit', content: "There are many good things in redux toolkit."},
    {id: '2', title: 'Learn React', content: "There are many good things in react."}
]


const postSlice = createSlice({
    name : 'posts',
    initialState,
    reducers: {
        postAdded(state, action){
            state.push(action.payload);
        }


    }
})

export const { postAdded }= postSlice.actions;
export const selectAllPosts = (state) =>state.posts;
export default postSlice.reducer;