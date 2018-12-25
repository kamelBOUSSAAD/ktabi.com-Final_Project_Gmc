import {
    ADD_BOOK,
    GET_BOOKS,
    // GET_POST,
    DELETE_BOOK,
    BOOK_LOADING,
    UPDATE_BOOK
  } from '../actions/types';
  
  const initialState = {
    books:[],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case UPDATE_BOOK:
      return {
        books: action.payload,
        loading: false
      };
      case BOOK_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_BOOKS:
        return {
          ...state,
          books: action.payload,
          loading: false
        };
    //   case GET_POST:
    //     return {
    //       ...state,
    //       post: action.payload,
    //       loading: false
    //     };
      case ADD_BOOK:
        return {
          ...state,
          books: [action.payload, ...state.books]
        };
      case DELETE_BOOK:
        return {
          ...state,
          books: state.books.filter(book => book._id !== action.payload)
        };
      default:
        return state;
    }
  }
  