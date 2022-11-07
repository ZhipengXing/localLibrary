function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter(
    (book) => book.borrows[0].returned === false
  );
  return borrowedBooks.length;
}

function getMostCommonGenres(books) {
  const genreAll = books.map((book) => book.genre);
  const genreCountOb = {};
  genreAll.forEach((item) => {
    if (genreCountOb[item] === undefined) {
      genreCountOb[item] = 1;
    } else {
      genreCountOb[item] += 1;
    }
  });
  const genres = Object.keys(genreCountOb);
  const genresCountEach = Object.values(genreCountOb);
  const genresCount = [];
  for (i = 0; i < genres.length; i++) {
    const name = genres[i];
    const count = genresCountEach[i];
    genresCount[i] = { name, count };
  }
  genresCount.sort((genre1, genre2) => (genre1.count > genre2.count ? -1 : 1));
  const [no1, no2, no3, no4, no5, ...others] = genresCount;
  return [no1, no2, no3, no4, no5];
}

function getMostPopularBooks(books) {
  const borrowedTimes = books.map((book) => book.borrows.length);
  const bookTitles = books.map((book) => book.title);
  const bookCount = [];
  for (i = 0; i < borrowedTimes.length; i++) {
    const name = bookTitles[i];
    const count = borrowedTimes[i];
    bookCount[i] = { name, count };
  }
  bookCount.sort((book1, book2) => (book1.count > book2.count ? -1 : 1));
  const [no1, no2, no3, no4, no5, ...rest] = bookCount;
  return [no1, no2, no3, no4, no5];
}

function getMostPopularAuthors(books, authors) {
  //get count for each author
  const authorCount = authors.map((author) => {
    let count = 0;
    books.forEach((book) => {
      book.authorId === author.id
        ? (count += book.borrows.length)
        : (count += 0);
    });
    const name = `${author.name.first} ${author.name.last}`;
    return { name, count };
  });
  authorCount.sort((author1, author2) =>
    author1.count > author2.count ? -1 : 1
  );
  const [no1, no2, no3, no4, no5, ...rest] = authorCount;
  return [no1, no2, no3, no4, no5];
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
