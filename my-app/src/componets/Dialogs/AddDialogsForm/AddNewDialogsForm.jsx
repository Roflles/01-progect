import React from "react";
import {useForm} from "react-hook-form";
import s from "../Dialogs.module.css";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../FormsControls/FormsControls";

const maxLength = maxLengthCreator(50);

const AddNewDialogsForm = (props) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className={s.slc}>
                <label htmlFor="textarea"/>
                <Textarea
                    {...register("newMessageBody", {

                        validate: {required, maxLength}
                    })}
                    type="textarea"
                    placeholder="Enter your message"/>
                {errors.newMessageBody && <span role="alert">{errors.newMessageBody.message}</span>}
            </div>
            <div>
                <button className={s.btn}>Send</button>
            </div>
        </form>
    );
}

export default AddNewDialogsForm;