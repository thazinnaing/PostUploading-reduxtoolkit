import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo=({timeStamp})=>{
    let timeAgo = ""
    if(timeStamp){                                 // date string
        const date = parseISO(timeStamp)           // date obj
        const timePeriod=formatDistanceToNow(date) // distance to now -- e.g. less than 1 minute
        timeAgo= `${timePeriod} ago`               // less than 1 minute + ago
    }

    return(
        <span title={timeStamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}

export default TimeAgo;