import { all, put, call, takeLatest } from "redux-saga/effects";
import { sell_book } from "./BookType";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* purchaseBookSaga() {
  yield delay(2000);
  console.log('Inside saga');
  yield put({ type: sell_book });
}

export function* watchPurchaseBookSaga() {
  yield takeLatest('buy_book', purchaseBookSaga);
}

export default function* rootSaga() {
  yield all([
    watchPurchaseBookSaga(),
  ]);
}
