import { mainPath } from "./url.js";
import { resultsDiv } from "../dom.js";

export default function renderData(data) {
  let htmlString = "";
  
  for (const item of data) {
    const url = encodeURI(mainPath + item.title);

    htmlString += `
          <div>
            <h4>${item.title}</h4>
            ${item.snippet}... 
            <br>${item.timestamp.slice(0, 7)}<br>
            <a href="${url}" target="_blank">${url}</a>
            <hr>
          </div>
          `;
  }
  resultsDiv.innerHTML = "";
  resultsDiv.insertAdjacentHTML("beforeEnd", htmlString);
}
