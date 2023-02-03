import { DECREASE_COUNT, INCREASE_COUNT, REMOVE_TEXT } from "../ActionTypes";

export const increaseCountAction = () => async (dispatch) => {
    dispatch({
      type: INCREASE_COUNT,
    });
  };

export const decreaseCountAction = () => async (dispatch) => {
    dispatch({
        type:DECREASE_COUNT
    })
}
export const messageAction = () => async (dispatch) => {
    dispatch({
        type:REMOVE_TEXT
    })
}