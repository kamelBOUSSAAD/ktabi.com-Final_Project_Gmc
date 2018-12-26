import axios from "axios";

import {
  GET_ERRORS,
  ADD_BOOK,
  GET_ALL_BOOKS,
  BOOK_LOADING,
  DELETE_BOOK,
  UPDATE_BOOK,
  GET_BOOKS,
} from "./types";

// Create book
export const addBook = bookData => dispatch => {
  axios
    .post("/api/book", bookData)
    .then(res =>
      dispatch({
        type: ADD_BOOK,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Books by id user
export const getBooks = userId => dispatch => {
  dispatch(setBookLoading());
  axios
    .get(`/api/book/${userId}`)
    .then(res =>
      dispatch({
        type: GET_BOOKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BOOKS,
        payload: null
      })
    );
};

// Set loading state
export const setBookLoading = () => {
  return {
    type: BOOK_LOADING
  };
};

// Delete Book
export const deleteBook = id => dispatch => {
  axios
    .delete(`/api/book/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_BOOK,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//UPDATE BOOK
export const updateBook = (bookData, id) => dispatch => {
  axios
    .put(`/api/book/${id}`, bookData)
    .then(res =>
      dispatch({
        type: UPDATE_BOOK,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Books 
export const getAllBooks = () => dispatch => {
  // dispatch(setBookLoading());
  axios
    .get(`/api/book/`)
    .then(res =>
      dispatch({
        type: GET_ALL_BOOKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_BOOKS,
        payload: null
      })
    );
};
