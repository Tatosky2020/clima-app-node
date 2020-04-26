const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de al ciudad para obtener el clima',
        demand: true
    }

}).argv;

module.exports = {
    argv
}