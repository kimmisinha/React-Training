import { takeEvery, put, delay, all } from "redux-saga/effects";
import { buy_book } from "./BookType";

function* purchaseBookSaga() {
  yield delay(5000);
  yield put({ type: buy_book });
}

function* watchPurchaseBookSaga() {
  yield takeEvery("purchase_book", purchaseBookSaga);
}

export default function* rootSaga() {
{    console.log("kimmi")
}
  yield all([watchPurchaseBookSaga()]);
}
