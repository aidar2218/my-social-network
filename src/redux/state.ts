import {rerenderEntireTree} from "../render";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
}

export type ProfilePageType = {
    postsData: PostDataType[]
}

export type PostDataType = {
    id: string
    message: string
    likesCount: number
}

export type MessagesPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}

export type DialogsDataType = {
    id: string
    name: string
}

export type MessagesDataType = {
    id: string
    message: string
}

let state: StateType = {
    profilePage: {
        postsData: [
            {id: "1", message: "Hi, how are you?", likesCount: 18},
            {id: "2", message: "I'm learning React!", likesCount: 28},
            {id: "3", message: "Blabla", likesCount: 16},
            {id: "4", message: "Yeeeaaaa", likesCount: 12}
        ]
    },

    dialogsPage: {
        dialogsData: [
            {id: "1", name: "Aidar"},
            {id: "2", name: "Azim"},
            {id: "3", name: "Baizak"},
            {id: "4", name: "Agbar"},
            {id: "5", name: "Aktan"}
        ],
        messagesData: [
            {id: "1", message: "Hi!"},
            {id: "2", message: "How are you?"},
            {id: "3", message: "Yo"},
        ]
    }
}

export type AddPostType = (postMessage: string) => void

export const addPost = (postMessage: string) => {
    const newPost: PostDataType = {
        id: "5",
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export default state;