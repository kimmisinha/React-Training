import { buy_book, add_book, percentage_book, user_details, sell_book } from "./BookType";

// Thunk action to simulate a book purchase with a delay
export const purchase_book = () => {
  return (dispatch) => {
    setTimeout(() => {
      console.log('Inside thunk');
      dispatch({ type: sell_book });
    }, 2000);
  };
};

export const buying_book = () => {
  return {
    type: add_book,
  };
};

// Using payload
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
