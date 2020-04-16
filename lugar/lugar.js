const axios = require('axios');




const getLocationLatitud = async(direccion) => {
    const encodeURr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURr}`,
        headers: { 'x-rapidapi-key': '756c249e08msh31e9f82278c8557p124bc3jsnb78075cff17a' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error("No hay resultados para: " + direccion);

    }

    const data = resp.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        address,
        lat,
        lng
    };
}

module.exports = {
    getLocationLatitud
}


// key api: 56f01422b2c2d8bb393e62e217a1dd69