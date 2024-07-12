// src/services/userServices.js
import axiosInstance from '../api.js';

const userServices = {
  login(user) {
    return axiosInstance.post('v1/user/login', user);
  }
};

export default userServices;
