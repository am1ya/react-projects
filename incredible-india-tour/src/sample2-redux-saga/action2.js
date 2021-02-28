import { ADD_ARTICLE } from './Constants';


export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
  };