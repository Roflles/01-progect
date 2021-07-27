import React from 'react';
import './App.css';
import Navbar from './componets/Navbar/Navbar';
import Settings from './componets/Settings/Settings';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import {Route} from 'react-router-dom';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import UsersContainer from './componets/Users/UsersContainer';
import ProfileContainer from './componets/Profile/ProfileContainer';
import HeaderContainer from './componets/Header/HeaderContainer';


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>

                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>

                <Route path='/music'
                       render={() => <Music/>}/>

                <Route path='/news'
                       render={() => <News/>}/>

                <Route path='/settings'
                       render={() => <Settings/>}/>

                <Route path='/users'
                render={() => <UsersContainer/>}/>

            </div>
        </div>
    )
}

export default App;
