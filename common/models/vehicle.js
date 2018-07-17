'use strict';

module.exports = function(Vehicle) {

  function validatorAsyncForManufacturerid(error, next) {
    const Manufacturer = Vehicle.app.models.Manufacturer;

    Manufacturer.exists(this.manufacturerId,
      function(errorExists, instanceExists) {
        if (errorExists || !instanceExists) {
          error();
        }
        next();
      });
  }

  Vehicle.validateAsync('manufacturerId', validatorAsyncForManufacturerid, {
    message: 'Manufacturer doesn\'t exist',
  });
};
