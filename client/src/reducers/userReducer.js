import {
    GET_RECENT_USERS,
    
  } from '../actions/types';
  
  const initialState = {
    users_recent:[],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case  GET_RECENT_USERS:
      return {
        users_recent: action.payload,
        loading: false
      };
     
      default:
        return state;
    }
  }
  