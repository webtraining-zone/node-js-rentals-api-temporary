'use strict';

const server = require('../server');

const dataSource = server.dataSources.mysql_db_auth;
const lblModels = ['Rental'];

dataSource.automigrate(lblModels, function(error) {
  if (error) throw error;

  console.log('Rental schema was created!');
  dataSource.disconnect();
});
