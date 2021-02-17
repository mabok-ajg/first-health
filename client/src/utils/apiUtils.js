const axios = require("axios");

const commonAxios = axios.create({
  //baseURL: process.env.REACT_APP_BACKEND_URL,
  baseURL: 'http://localhost:3000/'
});

commonAxios.interceptors.response.use(
  function (response) {
    const { data } = response;
    console.log(data);
    if (data.statusCode === null ) {
      const error = new Error(data.message || "Uknown error.");
      error.data = data.data;
      throw error;
    }
    return data;
    // return sleep(100, data.data); all sleep function in every method deleted

  },
  function (error) {
    return Promise.reject(error);
  }
);

export { commonAxios };
