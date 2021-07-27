import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>);
    let massagesElements = props.messages.map(m => <Message id={m.id} key={m.id} message={m.message}/>);
    let addMessage = () => {
        props.addMessage();

    }


    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {massagesElements}
            </div>
            <div>
                <div className={s.slc}>
                    <textarea onChange={onMessageChange}
                              value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage} className={s.btn}> Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;