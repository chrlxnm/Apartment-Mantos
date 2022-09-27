import { REQUESTING, REQUEST_DONE } from "./actionTypes";

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

export { requesting, requestDone };