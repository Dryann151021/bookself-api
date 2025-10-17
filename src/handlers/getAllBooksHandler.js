const books = require('../data/books');

const getAllBooksHandler = (request, h) => {
  const { finished, reading, name } = request.query;

  let filteredBooks = books;
  if (reading !== undefined) {
    const readingValue = reading === '1';
    filteredBooks = books.filter((book) => book.reading === readingValue);
  }
  if (finished !== undefined) {
    const finishedValue = finished === '1';
    filteredBooks = books.filter((book) => book.finished === finishedValue);
  }

  if (name !== undefined) {
    filteredBooks = books.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  const containBooks = filteredBooks.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  const response = h.response({
    status: 'success',
    data: {
      books: containBooks,
    },
  });
  response.code(200);
  return response;
};

module.exports = getAllBooksHandler;
