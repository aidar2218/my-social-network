import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    likeCounts: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" alt=""/>
            { props.message }
            <div>
                <span>{ props.likeCounts }</span>
            </div>

        </div>
    )
}

export default Post;