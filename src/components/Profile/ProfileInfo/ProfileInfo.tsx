import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.imgCity} src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;