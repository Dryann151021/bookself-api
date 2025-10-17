const addBooksHandler = require('../handlers/addBooksHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
];

module.exports = routes;
