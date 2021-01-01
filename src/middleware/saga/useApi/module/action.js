import { GET_POST } from "middleware/thunk/modules/types";

export const getPost = (id) => ({type: GET_POST, payload:id});