import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddNewDialogsForm from "./AddDialogsForm/AddNewDialogsForm";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>);
    let massagesElements = props.messages.map(m => <Message id={m.id} key={m.id} message={m.message}/>);


    let addMessage = (values) => {
        props.addMessage(values.newMessageBody);

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {massagesElements}
            </div>
            <div  className={s.slc}>
                <AddNewDialogsForm onSubmit={addMessage}/>
            </div>

        </div>
    )
}



export default Dialogs;