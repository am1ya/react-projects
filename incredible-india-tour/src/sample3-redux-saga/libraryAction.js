import { ADD_BOOK } from './LibraryConstants';

/*export function getData() {
    return fetch("http://localhost:8080/sample-library/webapi/books")
      .then(response => response.json())
      .then(json => {
        return { type: "DATA_LOADED", payload: json };
      });
  }*/

  export function getData() {
    return { type: "DATA_REQUESTED" };
  }