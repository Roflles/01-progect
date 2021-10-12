import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {useForm} from "react-hook-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../FormsControls/FormsControls";


const MyPosts = React.memo(props => {
    let postsElements =
        props.posts.map((p, id) => <Post message={p.message} key={id} likeCount={p.likesCount}/>);
    let newPostElement = React.createRef();


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>
            <div className={s.messangBlock}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength = maxLengthCreator(50);

const AddNewPostForm = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className={s.slc}>
                <label htmlFor="textarea"/>
                <Textarea
                    id="textarea"
                    {...register("newPostText", {

                        validate: {required, maxLength}

                    })}
                    type="textarea"
                    placeholder="Enter your message"/>
                {errors.newPostText && <span role="alert">{errors.newPostText.message}</span>}
            </div>
            <div>
                <button className={s.btn}>Send</button>
            </div>
        </form>
    )
};


export default MyPosts;