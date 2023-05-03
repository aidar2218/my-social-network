import React from 'react';
import './App.css';
import Dialogs, {DialogType, MessageType} from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {PostType} from "./components/Profile/MyPosts/MyPosts";

type AppPropsType = {
    posts: Array<PostType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const App = (props: AppPropsType) => {
    // let posts = [
    //     {id: "1", message: "Hi, how are you?", likesCount: 18},
    //     {id: "2", message: "I'm learning React!", likesCount: 28},
    //     {id: "3", message: "Blabla", likesCount: 16},
    //     {id: "4", message: "Yeeeaaaa", likesCount: 12},
    // ];

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

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path="/profile" component={Profile}/>*/}
                    {/*<Route path="/dialogs" component={Dialogs}/>*/}
                    {/*<Route path="/news" component={News}/>*/}
                    {/*<Route path="/music" component={Music}/>*/}
                    {/*<Route path="/settings" component={Settings}/>*/}

                    <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                    <Route path="/news" render={() => <News />}/>
                    <Route path="/music" render={() => <Music />}/>
                    <Route path="/settings" render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
