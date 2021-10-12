import React from "react";
import styles from "./FormsControls.model.css"

export const Textarea = (onBlur, onChange, ...props) => {
    return (
        <div className={styles.formControl + " " + styles.errors}>
            <textarea {...onBlur} {...props} />
        </div>
    )
}

export const createField = () => {

}