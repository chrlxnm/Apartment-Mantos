import { requestDone, requesting, showModal } from '../redux/action/generalAction';

import { EncryptStorage } from 'encrypt-storage';
import {
  URL_PREFIX
} from "./constant";
import axios from "axios";
import store from '../redux/store/index';

// import https from 'https';

export const encryptStorage = new EncryptStorage('ict1234567', {
  storageType: 'localStorage'
})

function closeModal() {
  // store.dispatch(hideModal());
}

function handleError(error) {
  if (error.response) {
    const { message } = error?.response?.data
      if (message && message !== null) {
        store.dispatch(
          showModal({
            message: message || 'Fetch Error, Please call admin !',
          })
        );
      
  } else {
      // store.dispatch(
      //   showModal({
      //     type: ERROR_MODAL,
      //     title: 'ERROR',
      //     message: 'Bad Request',
      //     onConfirm: () => {
      //       closeModal()
      //     }
      //   })
      // );
    
  }
}
}

export const AxiosHitServices = axios.create({
  // baseURL: URL_PREFIX,
  timeout: 60000,
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized:false
  // }),
  headers: {
    "access-control-allow-origin" : "*",
    'Content-Type': 'application/json',
  },
})

Object.setPrototypeOf(AxiosHitServices, axios);

AxiosHitServices.interceptors.request.use(
  (conf) => {
    let loginToken = encryptStorage.getItem('loginToken');
    if (conf.url.includes('login')) {
      conf.headers.Authorization = null;
    } else {
      conf.headers.Authorization = loginToken;
    } 
    // if(urlWithoutLoadingPopup.find(e => e === conf.url) === undefined) {
      store.dispatch(requesting())
    // }
    return conf ;
  },
  (error) => {
    store.dispatch(requestDone());
    return Promise.reject(error) ;
  }
)

AxiosHitServices.interceptors.response.use(
  (response) => {
    store.dispatch(requestDone());
    return response;
  },
  (error) => {
    store.dispatch(requestDone());
    switch (error?.response?.status) {
      case 401:
        // store.dispatch(
        //   showModal({
        //     type: ERROR_MODAL,
        //     title: 'ERROR',
        //     message: 'Unauthorized',
        //     onConfirm: () => {
        //       window.location.reload();
        //       closeModal()
        //     }
        //   })
        // );
        break;
      default:
        handleError(error);
        break;
    }
    return Promise.reject(error);
  }
)