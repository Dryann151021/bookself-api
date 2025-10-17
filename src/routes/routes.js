const addBooksHandler = require('../handlers/addBooksHandler');
const getAllBooksHandler = require('../handlers/getAllBooksHandler');
const getBookByIdHandler = require('../handlers/getBookByIdHandler');
const editBookByIdHandler = require('../handlers/editBookByIdHandler');
const deleteBookByIdHandler = require('../handlers/deleteBookByIdHandler');

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
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
