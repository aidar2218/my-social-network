import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPageType} from "../../redux/state";

type DialogsPropsType = {
    messagesPage: MessagesPageType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagesPage.messagesData.map(m => <Message message={m.message}/>);

    const newMessageElement = React.createRef<HTMLTextAreaElement>();
    const addMessage = () => {
        alert(newMessageElement.current?.value)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div className={s.textArea}>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div className={s.buttonAddMessage}>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;