import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { nanoid } from "@reduxjs/toolkit";

const initialState=[
    {id: '1',
     title: 'Learn Redux Toolkit',
     content: "There are many good things in redux toolkit.",
     date: sub(new Date(), {minutes: 10}).toISOString(),
     reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
     }
    },
    {id: '2',
    title: 'Learn React',
    content: "There are many good things in react.",
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
     }
    }
]


const postSlice = createSlice({
    name : 'posts',
    initialState,
    reducers: {
        postAdded:{
            reducer(state, action){
            state.push(action.payload);
            },

            prepare(props){
                return{
                    payload: {
                        id : nanoid(),
                        title: props.title,
                        content: props.content,
                        userId: props.userId,
                        date : new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }

        },

        reactionAdded(state, action){
            const {postId, reaction}=action.payload;
            const existingPost = state.find(post=> post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const { postAdded, reactionAdded }= postSlice.actions;
export const selectAllPosts = (state) =>state.posts;
export default postSlice.reducer;