import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILED } from "../constans/todoConstan";
import axios from "axios";

export const getAllTodos = () => async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST });
    try {
        const res = await axios.get("https://www.thesportsdb.com/api/v1/json/2/all_sports.php");
        dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_TODOS_FAILED, payload: error.message });
    }

};