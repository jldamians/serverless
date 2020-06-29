'use strict';

const HttpStatus = require('http-status-codes');
const Ruc = require('./Ruc');

module.exports.check = async ({ number }) => {
  let response = {};

  try {
    const ruc = Ruc.of(number);

    response = {
      statusCode: HttpStatus.OK,
      body: 'Número de ruc correcto',
    };
  } catch ({ message }) {
    response = {
      statusCode: HttpStatus.NOT_FOUND,
      body: message,
    };
  }

  return response;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
