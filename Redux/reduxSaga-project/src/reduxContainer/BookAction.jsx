import { buy_book, add_book, percentage_book, user_details } from "./BookType";

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
    type: percentage_book,
    payload: percentage,
  };
};

export const userdetails = (user) => {
  return {
    type: user_details,
    payload: user,
  };
};
