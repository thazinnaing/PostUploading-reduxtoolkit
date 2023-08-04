import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";
import "../../css/AddPostForm.css"

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons=({post})=>{
    const dispatch = useDispatch()

    const reactinButtons = Object.entries(reactionEmoji).map(([name, emoji])=>{
        return(
            <button 
            key={name}
            type="button"
            className="reactionButton"
            onClick={()=>{
                dispatch(reactionAdded({postId: post.id, reaction: name}))
            }}
            >
                {emoji} {post.reactions[name]}

            </button>
        )

    })

    return(
        <div>{reactinButtons}</div>
    )
}

export default ReactionButtons;