import { ADD_POST, GET_POSTS, GET_POST, LOADING_POSTS } from '../actions/types'

const initialState = {
  posts: [],
  post: {},
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOADING_POSTS:
      return {
        ...state,
        loading: true
      }
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload], ...state
      }
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      }  
    default:
      return state  
  }
}