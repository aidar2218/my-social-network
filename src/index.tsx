import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: "1", message: "Hi, how are you?", likesCount: 18},
    {id: "2", message: "I'm learning React!", likesCount: 28},
    {id: "3", message: "Blabla", likesCount: 16},
    {id: "4", message: "Yeeeaaaa", likesCount: 12},
];

let dialogs = [
    {id: "1", name: "Aidar"},
    {id: "2", name: "Azim"},
    {id: "3", name: "Baizak"},
    {id: "4", name: "Agbar"},
    {id: "5", name: "Aktan"}
];

let messages = [
    {id: "1", message: "Hi!"},
    {id: "2", message: "How are you?"},
    {id: "3", message: "Yo"},
];


ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root')
);