import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updatePostChange} from "./redux/store";


export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updatePostChange={updatePostChange} addMessage={addMessage} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

