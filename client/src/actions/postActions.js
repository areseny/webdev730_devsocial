import axios from "axios";
import {
  GET_ERRORS,
  ADD_POST
} from "./types";

//ADD POST
export const addPost = (postData) => dispatch => {
  axios.post("/api/post", postData).then(res => dispatch({
    type: ADD_POST,
    payload: res.data
  })).catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  }))
}