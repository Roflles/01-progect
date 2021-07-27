import profileReducer from "./profile-Reducer";
import dialogsReducer from "./dialogs-Reducer";
import navbarReducer from "./navbar-Reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'You bebra!', likeCount: '20'},
                {id: 2, message: 'I not bebra', likeCount: '13'},
                {id: 3, message: 'I love is\'cream', likeCount: '23'}
            ],
            newPostText: 'enter your message text'
        }
        ,
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Izum'},
                {id: 2, name: 'Daniel'},
                {id: 3, name: 'Ivana'},
                {id: 4, name: 'Vasa'},
                {id: 5, name: 'Peta'},
                {id: 6, name: 'Anrei'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are yuo dildo'},
                {id: 3, message: 'Great, but I played with a dildo'}
            ],
            newMessageText: 'enter your message text'
        }

    },
    _callSibscriber() {
        console.log('stateRender')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSibscriber = observer;
    },


    dispatch(action) {
        debugger
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);

        this._callSibscriber(this._state);

    }

}


export default store;