import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"이인제",
        comment:"안녕하세요, 소플입니다.",
    },
    {
        name: "강경민",
        comment: "안녕하세요, 강경민입니다.",
    },
    {
        name: "유재석",
        comment: "안녕하세요, 메뚜기입니다.",
    },
];

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;