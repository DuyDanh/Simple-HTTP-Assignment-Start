const textHandler = require('./textResponses');

const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: textHandler.hello,
  };
    // convert Javascript object to json string
  const stringMessage = JSON.stringify(helloJSON);
  // json media type is application/json
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

const getTimeJSON = (request, response) => {
  const timeJSON = {
    time: textHandler.getTimeString(),
  };
    // convert Javascript object to json string
  const stringMessage = JSON.stringify(timeJSON);
  // json media type is application/json
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

module.exports.getTimeJSON = getTimeJSON;
module.exports.getHelloJSON = getHelloJSON;
