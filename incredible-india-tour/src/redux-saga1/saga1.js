import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {

  const json = yield fetch("http://localhost:3001/api/v1/todos")
  .then(response => response.json());
 
  /*const json = yield fetch("http://localhost:8080/sample-library/webapi/articles")
    .then(response => response.json());*/

  /*const json = yield fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json());*/

  yield put({ type: "NEWS_RECEIVED", json: json || [{ error: json.message }] });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}