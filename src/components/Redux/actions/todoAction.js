import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILED } from "../constans/todoConstan";
import axios from "axios";

export const getAllTodos = () => async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST });
    try {
        const res = await axios.get("https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran.json");
        dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_TODOS_FAILED, payload: error.message });
    }

};