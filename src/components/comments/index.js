import React, { useState } from "react";
import CommentContainer from "./components/CommentContainer";
import { commentData } from "../../constants/comment";
import { updateComment } from "./utils/helper";

export default function Comments() {
    const [comments,setComments]=useState(commentData)
    const addReply=(commentId,newComment)=>{
        let updatedComment=updateComment(comments,commentId,newComment)
        setComments(updatedComment)
    }
  return <CommentContainer comments={comments} addReply={addReply}/>;
}
