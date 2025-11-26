import axiosLib from "axios";

const axios = axiosLib.create({
    baseURL: 'https://www.googleapis.com/blogger/v3',
    timeout: 1000,
    params: {
        key: 'AIzaSyBBgiYs1ybVhN7LPEfpaS0xkBV09K80_vU'
    }
});

axiosLib.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosLib.interceptors.response.use(function onFulfilled(response) {
    return response.data;
}, function onRejected(error) {
    let errorUIMessage
    if (error.response) {
        errorUIMessage = error.response.data.message

    } else if (error.request) {
        console.log(error.request);
    } else {
        errorUIMessage = error.message
    }
    console.log(error.config);
    return Promise.reject(errorUIMessage);
});

export default axios



