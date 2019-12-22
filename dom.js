import { createAndAppend } from "./modules/generic.js";
import fetchData from "./modules/fetchData.js";
import { randomPath } from "./modules/url.js";

const mainDiv = createAndAppend("div", document.body, null, "mainDiv");

const resultsDiv = createAndAppend("div", document.body, null, "resultsDiv");

const logoDiv = createAndAppend("div", mainDiv, null, "logoDiv");

const logo = createAndAppend("img", logoDiv, null, "logo");
logo.src = "images/Wikipedia-logo-v2.svg";
logo.align = "center";

const searchInput = createAndAppend("input", mainDiv);
searchInput.placeholder = "search";
searchInput.name = "q";
searchInput.required;

const searchInputButton = createAndAppend("button", mainDiv, "Search wiki");
searchInputButton.addEventListener("click", () => {
  searchInput.value === ""
    ? alert("type something!")
    : fetchData(searchInput.value);
});

const randomButtonInnerHtml = `<a href='${randomPath}' target='_blank'>I'm feeling lucky</a>`;
createAndAppend("button", mainDiv, randomButtonInnerHtml);

createAndAppend("footer", document.body);

export { resultsDiv };
