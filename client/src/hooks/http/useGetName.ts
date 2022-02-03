import axios from 'axios';

const useName = () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: process.env.API_TIME_OUT,
    headers: {'Content-Type': 'application/json'}
  });

  instance.interceptors.request.use(
    config => {
      console.log('Request successed');
      return config
    },

    err => {
      console.error('Request error: ' + err)
      return Promise.reject(err);
    }
  )

  instance.interceptors.response.use(
    response => {
      return response.data
    },

    err => {
      return Promise.reject(err);
    }
  )

  return instance
}

export default useName

