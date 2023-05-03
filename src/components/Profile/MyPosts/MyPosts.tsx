import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export type PostType = {
    id: string,
    message: string,
    likesCount: number
}

export type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsPropsType) => {
    // let posts = [
    //     {id: "1", message: "Hi, how are you?", likesCount: 18},
    //     {id: "2", message: "I'm learning React!", likesCount: 28},
    //     {id: "3", message: "Blabla", likesCount: 16},
    //     {id: "4", message: "Yeeeaaaa", likesCount: 12},
    // ];

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                        <button>Remove</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
    )
}

export default MyPosts;