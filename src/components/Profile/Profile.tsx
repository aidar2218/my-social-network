import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostType, ProfilePageType, UpdateNewPostTextType} from "../../redux/state";

export type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: AddPostType
    updateNewPostText: UpdateNewPostTextType
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage}
                     addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>

        </div>
    )
}

export default Profile;