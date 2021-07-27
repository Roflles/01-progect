import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src='https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg'/>
            {props.message}
            <div>
                <span>{props.likeCount} like</span>
            </div>
        </div>
    )
}

export default Post;