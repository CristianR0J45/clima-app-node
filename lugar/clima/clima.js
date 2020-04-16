// const axios = require('axios');


// const getClima = async(lat, lng) => {
//     const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1e77ab7369ea045432654b4667d5b687&units=metric`);
//     // Console.log(resp);
//     return resp.data.main.temp;
// }

// module.exports = {
//     getClima
// }


const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=1e77ab7369ea045432654b4667d5b687&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}