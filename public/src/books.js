function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter((book) => book.borrows[0].returned === false);
  const returned = books.filter((book) => book.borrows[0].returned === true);
  const partition = []; //otherways to do this?
  partition.push(borrowed);
  partition.push(returned);
  return partition;
}

function getBorrowersForBook(book, accounts) {
  //find all the accounts that has borrowed the book
  const borrowed = book.borrows;
  const borrowedAccountID = borrowed.map((book) => book.id);
  const borrowedAccounts = accounts.filter((account) =>
    borrowedAccountID.includes(account.id)
  );
  //for each item in the borrowedAccounts array, add a key "returned", that matches borrowed array corresponding item returned value
  for (let i = 0; i < borrowedAccounts.length; i++) {
    borrowedAccounts[i].returned = borrowed[i].returned;
  }
  return borrowedAccounts;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
