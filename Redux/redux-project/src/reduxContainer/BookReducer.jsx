import { buy_book, add_book, PERCENTAGE_BOOK } from "./BookType";
const intialstate = {
  Numberofbook: 20,
  Totalnobook: 0,
  profitPercentage: 0,
};

const BookReducer = (state = intialstate, action) => {
  switch (action.type) {
    case buy_book:
      return {
        ...state,
        Numberofbook: state.Numberofbook - 1,
      };
    case add_book:
      return {
        ...state,
        Totalnobook: state.Totalnobook + 1,
      };
    case PERCENTAGE_BOOK:
      return {
        ...state,
        profitPercentage: action.payload,
      };
    default:
      return state;
  }
};
// console.log(BookReducer);
export default BookReducer;
