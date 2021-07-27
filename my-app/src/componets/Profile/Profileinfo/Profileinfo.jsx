import React from 'react';
import s from './Profileinfo.module.css';
import contentPhoto from '../../../assets/images/contet/content.jpg'
import Preloader from '../../Preloader/Preloader';
import notWork from '../../../assets/images/notWork.jpg'


const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.profileinfo}>
                <img src={contentPhoto}/>
            </div>
            <span>
                <div>
                    <img src={props.profile.photos.large}/>

                </div>
            </span>
            <h3>Мои контакты</h3>
                <div>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.website}</div>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.youtube}</div>
                    <div>{props.profile.contacts.github}</div>
                    <div>{props.profile.contacts.mainLink}</div>
                </div>
            <h3>Обо мне</h3>
            <span>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJob != true ? props.profile.lookingForAJob: <img className={s.notWork} src={notWork }/>}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div>{props.profile.fullName}</div>
            </span>
        </div>
    )
};

export default Profileinfo;