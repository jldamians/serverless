'use strict';

const Ruc = require('./Ruc');

module.exports.hello = async event => {
  let response = {};

  try {
    response = {
      statusCode: 200,
      body: JSON.stringify('Número de ruc correcto'),
    };
  } catch ({ message }) {
    response = {
      statusCode: 404,
      body: JSON.stringify('Número de ruc incorrecto'),
    };
  }

  return response;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
