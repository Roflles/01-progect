import React from 'react';
import {addPostActionCreat, updateNewPostTextActionCreat} from '../../../redux/profile-Reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreat());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreat(text)
            dispatch(action);
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;