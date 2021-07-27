import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements =
        props.posts.map((p,id )=> <Post message={p.message} key={id} likeCount={p.likeCount}/>);
    let newPostElement =
        React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (event) => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div className={s.slc}>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}
                            className={s.btn}>Send
                    </button>
                </div>
            </div>
            <div className={s.messangBlock}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;