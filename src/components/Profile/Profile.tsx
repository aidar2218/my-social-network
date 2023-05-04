import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/state";

export type ProfilePropsType = {
    profilePage: ProfilePageType
}

const Profile = (props: ProfilePropsType) => {
    // let posts = [
    //     {id: "1", message: "Hi, how are you?", likesCount: 18},
    //     {id: "2", message: "I'm learning React!", likesCount: 28},
    //     {id: "3", message: "Blabla", likesCount: 16},
    //     {id: "4", message: "Yeeeaaaa", likesCount: 12},
    // ];

    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage}/>
        </div>
    )
}

export default Profile;