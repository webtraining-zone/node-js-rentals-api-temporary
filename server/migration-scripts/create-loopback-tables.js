'use strict';

const server = require('../server');

const dataSource = server.dataSources.mysql_db_auth;
const lblModels = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];

dataSource.automigrate(lblModels, function(error) {
  if (error) throw error;

  console.log('LoopBack schemas were created!');
  dataSource.disconnect();
});
