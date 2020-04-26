const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6f4b659a477df10220cb9c7356ba6253&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}