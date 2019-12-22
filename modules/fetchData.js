import {searchUrl} from './url.js';
import errMsg from "./error.js";
import renderData from "./renderData.js";

export default async function fetchData(userInput) {
  try {
    const result = await fetch(searchUrl + userInput);
    const data = await result.json();

    const searchQuery = data.query.search;
    const totalHits = data.query.searchinfo.totalhits; //number of found topics

    //render error msg incase nothing found with user input
    return totalHits === 0
      ? errMsg(userInput)
      : renderData(searchQuery);
  } catch (error) {
    console.log(error);
  }
}
