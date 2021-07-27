import React from 'react';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

    return <div>
        <div>
            <Profileinfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>

    </div>
}

export default Profile;