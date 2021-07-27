const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE: {
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: body}]
            };

        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            };

        }
        default:
            return state;
    }

}

export const addMessageActionCreat = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreat = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;