import { buy_book } from "./BookType";
const intialstate = {
  Numberofbook: 20,
};

const BookReducer = (state = intialstate, action) => {
  switch (action.type) {
    case buy_book:
      return {
        ...state,
        Numberofbook: state.Numberofbook - 1,
      };
    default:
      return state;
  }
};
console.log(BookReducer);
export default BookReducer;
