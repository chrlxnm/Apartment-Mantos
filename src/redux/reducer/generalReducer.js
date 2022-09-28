import { REQUESTING, REQUEST_DONE } from "../action/actionTypes";

const initialState = {
  isLoading: false,
};

export const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTING:
        return {
            isLoading: true,
        };
        case REQUEST_DONE:
        return {
            isLoading: false,
        };
        default:
        return state;
    }
};