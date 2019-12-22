import { resultsDiv } from "../dom.js";

export default function errMsg(keyword) {
  let htmlString = `
    <div>
        <p>No results found for <b><i>${keyword}</i></b> in wikipedia archive</p> 
    </div>
    `;

  resultsDiv.innerHTML = "";
  resultsDiv.insertAdjacentHTML("beforeEnd", htmlString);
}
