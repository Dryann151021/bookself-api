const addBooksHandler = require('../handlers/addBooksHandler');
const getAllBooksHandler = require('../handlers/getAllBooksHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
];

module.exports = routes;
