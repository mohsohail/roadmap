const axios = require('axios');

const axiosInstance = axios.create({
  timeout: 10000,
});

export const callAPI = (request) => {
  return axiosInstance.request(request).then((res, err) => {
    if (err) {
      console.log(err);
    } else {
      return res.data;
    }
  });
};
