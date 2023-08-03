import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState=[
    {id: '1',
     title: 'Learn Redux Toolkit',
     content: "There are many good things in redux toolkit.",
     date: sub(new Date(), {minutes: 10}).toISOString()
    },
    {id: '2',
    title: 'Learn React',
    content: "There are many good things in react.",
    date: sub(new Date(), {minutes: 5}).toISOString()
    }
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