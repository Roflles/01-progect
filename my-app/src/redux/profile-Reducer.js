const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SER_USER_PROFILE = 'SER_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'You bebra!', likeCount: '20'},
        {id: 2, message: 'I not bebra', likeCount: '13'},
        {id: 3, message: 'I love is\'cream', likeCount: '23'}
    ],
    newPostText: 'enter your message text',
    profile: null,

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let text = state.newPostText;
            return {
                ...state,
                posts: [...state.posts, {id: 4, message: text, likeCount: 0}],
                newPostText: '',
            };

        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText};
        }
        case SER_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        default:
            return state
    }

}

export const addPostActionCreat = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SER_USER_PROFILE, profile});
export const updateNewPostTextActionCreat = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;