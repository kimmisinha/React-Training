import { buy_book, add_book, PERCENTAGE_BOOK } from "./BookType";

export const purchase_book = () => {
  return {
    type: buy_book,
  };
};

export const buying_book = () => {
  return {
    type: add_book,
  };
};

//Using payload
export const percentageBook = (percentage) => {
  return {
    type: PERCENTAGE_BOOK,
    payload: percentage,
  };
};
