 const lugar = require('./lugar/lugar');
 const clima = require('./lugar/clima/clima');
 const argv = require('yargs').options({
     direccion: {
         alias: 'd',
         desc: 'Dirección de la ciudad para obtener el clima',
         demand: true
     }
 }).argv;


 //  lugar.getLocationLatitud(argv.direccion)
 //      .then(data => {
 //          console.log(data);
 //      })
 //      .catch(err => {
 //          console.log("Error", err);
 //      });
 // Direccion

 //  clima.getClima(28.350000, -106.800003)
 //      .then(console.log)
 //      .catch(console.log);

 const getInfo = async(direccion) => {
     try {

         const cordenada = await lugar.getLocationLatitud(direccion);
         const temp = await clima.getClima(cordenada.lat, cordenada.lng);
         return `El clima de ${direccion} tiene una temperaura de ${temp}`
     } catch (e) {
         return `No fue posible encontrar el clima de ${direccion}`
     }

 }


 getInfo(argv.direccion)
     .then(console.log)
     .catch(console.log);