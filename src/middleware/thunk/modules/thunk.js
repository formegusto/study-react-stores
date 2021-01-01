import createRequestThunk from "./createRequestThunk";
import { GET_POST, GET_USERS } from "./types";
import { getPostAPI, getUsersAPI } from '../api/api';

export const getPost = createRequestThunk(GET_POST, getPostAPI);
export const getUsers = createRequestThunk(GET_USERS, getUsersAPI);

