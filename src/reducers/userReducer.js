import { GET_USERS, GET_POSTS, GET_ALBUMS, GET_PHOTOS, NEW_USER } from '../actions/type';

const initialState = {
    users: [],
    posts: [],
    albums: [],
    photos: []
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case GET_ALBUMS:
            return {
                ...state,
                albums: action.payload
            }
        case GET_PHOTOS:
            return {
                ...state,
                photos: action.payload
            }
        case NEW_USER:
            return {
                ...state,
                users: [action.payload, ...state.users]
                
            }
        default:
            return state;
    }
}