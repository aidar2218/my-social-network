import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddPostType, ProfilePageType, UpdateNewPostTextType} from "../../../redux/state";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: AddPostType
    updateNewPostText: UpdateNewPostTextType
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements =
        props.profilePage.postsData.
        map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value);
        }
    }

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={ addPost }>Add post</button>
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