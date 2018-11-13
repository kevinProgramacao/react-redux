import { GET_USERS, GET_POSTS, GET_ALBUMS, GET_PHOTOS, NEW_USER } from './type';

export const getUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => dispatch({
            type: GET_USERS,
            payload: users
        }))
}

export const getPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: GET_POSTS,
            payload: posts
        }))
}

export const getAlbums = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(albums => dispatch({
            type: GET_ALBUMS,
            payload: albums
        }))
}

export const getPhotos = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(photos => dispatch({
            type: GET_PHOTOS,
            payload: photos
        }))
}

export const newUser = (userData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)    
    })
        .then(res => res.json())
        .then(user => dispatch({
            type: NEW_USER,
            payload: user
        }))
}