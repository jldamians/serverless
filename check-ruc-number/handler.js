'use strict';

const Ruc = require('./Ruc');

module.exports.check = async ({ number }) => {
  let response = {};

  try {
    const ruc = Ruc.of(number);

    response = {
      statusCode: 200,
      body: 'Número de ruc correcto',
    };
  } catch ({ message }) {
    response = {
      statusCode: 404,
      body: message,
    };
  }

  return response;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
