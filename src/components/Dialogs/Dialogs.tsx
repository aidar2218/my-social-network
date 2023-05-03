import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

const Dialogs = (props: DialogsPropsType) => {
    // let dialogs = [
    //     {id: "1", name: "Aidar"},
    //     {id: "2", name: "Azim"},
    //     {id: "3", name: "Baizak"},
    //     {id: "4", name: "Agbar"},
    //     {id: "5", name: "Aktan"}
    // ];
    //
    // let messages = [
    //     {id: "1", message: "Hi!"},
    //     {id: "2", message: "How are you?"},
    //     {id: "3", message: "Yo"},
    // ];


    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;