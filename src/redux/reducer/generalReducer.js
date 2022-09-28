import { REQUESTING, REQUEST_DONE, SHOW_MODAL } from "../action/actionTypes";

import { HIDE_MODAL } from './../action/actionTypes';

const initialState = {
  isLoading: false,
  modal: {
    visible: false,
    message: ''
  }
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
        case SHOW_MODAL:
        return {
            ...state,
            modal: {
                ...state.modal,
                visible: true,
                message: action.payload
            }
        };
        case HIDE_MODAL:
        return {
            ...state,
            modal: {
                ...state.modal,
                visible: false,
                message: ''
            }
        };
        default:
        return state;
    }
};