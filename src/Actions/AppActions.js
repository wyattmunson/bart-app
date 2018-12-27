import * as types from "./ActionTypes";

export function changeTabIndex(input) {
  return dispatch => {
    dispatch({ type: types.CHANGE_TAB_INDEX, payload: input });
  };
}
