import { HIDE_MODAL, REQUESTING, REQUEST_DONE, SHOW_MODAL } from "./actionTypes";

function requesting() {
  return {
    type: REQUESTING,
  }
}

function requestDone() {
  return {
    type: REQUEST_DONE,
  }
}


function showModal(payload) {
  return {
    type: SHOW_MODAL,
    payload
  }
}

function hideModal() {
  return {
    type: HIDE_MODAL,
  }
}

export { requesting, requestDone, showModal, hideModal };