function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) =>
    account1.name.last.toLowerCase() > account2.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  books.forEach((book) => {
    const borrows = Object.values(book.borrows);
    const borrowerIDs = [];
    borrows.forEach((borrow) => borrowerIDs.push(borrow.id));
    borrowerIDs.includes(account.id) ? (result += 1) : (result += 0);
  });
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  //get array of books checked out by this account
  const borrowed = books.filter(
    (book) =>
      book.borrows[0].returned === false && book.borrows[0].id === account.id //no ; here
  );
  //map to new array to add author information
  return borrowed.map((book) => {
    const author = authors.find(
      (authorEach) => authorEach.id === book.authorId
    );
    return { ...book, author };
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
