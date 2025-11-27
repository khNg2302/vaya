import axiosLib from "axios";

const axios = axiosLib.create({
    baseURL: '/api/blogger-proxy',
    timeout: 1000,

});


axios.interceptors.request.use(function (config) {

    const urlParam = `https://www.googleapis.com/blogger/v3/blogs/2399953${config.url}?key=AIzaSyBBgiYs1ybVhN7LPEfpaS0xkBV09K80_vU`

    config.url = undefined

    config.params = {
        url: urlParam
    }

    return config
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function onFulfilled(response) {
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



