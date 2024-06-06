import { userdetails } from "./BookAction";
import { sell_book, add_book, percentage_book, user_details } from "./BookType";
const intialstate = {
  Numberofbook: 20,
  Totalnobook: 0,
  profitPercentage: 0,
  userDetails: {
    name: "",
    age: 0,
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
  },
};
const BookReducer = (state = intialstate, action) => {
  switch (action.type) {
    case sell_book:
      console.log('Inside reducer');
      return {
        ...state,
        Numberofbook: state.Numberofbook - 1,
      };
    case add_book:
      return {
        ...state,
        Totalnobook: state.Totalnobook + 1,
      };
    case percentage_book:
      return {
        ...state,
        profitPercentage: action.payload,
      };
    case user_details:

      return {
        ...state,
        userDetails: action.payload
      };

    default:
      return state;
  }
};
export default BookReducer;
