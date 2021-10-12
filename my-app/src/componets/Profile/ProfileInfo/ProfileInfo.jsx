import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import notWork from '../../../assets/images/notWork.jpg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <span>
                <div>

                    <img src={profile.photos.large}/>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </span>
            <h3>Мои контакты</h3>
                <div>
                    <div>{profile.contacts.facebook}</div>
                    <div>{profile.contacts.website}</div>
                    <div>{profile.contacts.vk}</div>
                    <div>{profile.contacts.twitter}</div>
                    <div>{profile.contacts.instagram}</div>
                    <div>{profile.contacts.youtube}</div>
                    <div>{profile.contacts.github}</div>
                    <div>{profile.contacts.mainLink}</div>
                </div>
            <h3>Обо мне</h3>
            <span>
                <div>{profile.aboutMe}</div>
                <div>{profile.lookingForAJob != true ? profile.lookingForAJob: <img className={s.notWork} src={notWork }/>}</div>
                <div>{profile.lookingForAJobDescription}</div>
                <div>{profile.fullName}</div>
            </span>
        </div>
    )
};

export default ProfileInfo;