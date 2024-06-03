import buy_book from './BookType'
const intialstate={
    Numberofbook:20
}

const BookReducer=(state=intialstate,action)=>{
    switch(action.type){
        case buy_book:return {
            ...state,Numberofbook:state.intialstate-1
        }
        default:return state
    }
}
export default BookReducer