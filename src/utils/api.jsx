const BASE_URL = 'http://10.0.2.2:8000/api/v1/';

import axios from 'axios';

export const get = (url, callback, errorCallback) => {
  axios
    .get(BASE_URL + url)
    .then(res => {
      callback(res.data);
    })
    .catch(err => {
      errorCallback(err);
    });
};

export const post = (url, data, callback, errorCallback) => {
  axios
    .post(BASE_URL + url, (data = data))
    .then(res => {
      callback(res.data);
    })
    .catch(err => {
      errorCallback(err);
    });
};
