import profileReducer, {addPostActionCreator, deletePost} from "./profile-Reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
};

it('new post should be added', () => {
    let action = addPostActionCreator("IT-Camasutraa.com");


    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it('message of new post should correct', () => {
    let action = addPostActionCreator("IT-Camasutraa.com");

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("IT-Camasutraa.com");
});

it('after deleting length of massages should de decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('after deleting length `t be decrement if id of incorrect`', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});