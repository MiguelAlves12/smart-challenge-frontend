const axios = require("axios");
const api = axios.create({
    baseURL: 'https://smart-challenge-backend.herokuapp.com/'
});

module.exports = api;