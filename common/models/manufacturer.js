'use strict';

module.exports = function(Manufacturer) {

  Manufacturer.validatesUniquenessOf('name', {
    message: 'Manufacturer\'s name is not unique',
  });
};
