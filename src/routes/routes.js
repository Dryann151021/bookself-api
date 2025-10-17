const addBooksHandler = require('../handlers/addBooksHandler');
const getAllBooksHandler = require('../handlers/getAllBooksHandler');
const getBookByIdHandler = require('../handlers/getBookByIdHandler');

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
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
];

module.exports = routes;
