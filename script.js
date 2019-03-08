"use strict";

const mainPath = "https://en.wikipedia.org/wiki/";
const randomPath = mainPath + "Special:Random";
const searchUrl =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*& srsearch=";

const randomSearch = () =>
  `<a href='${randomPath}' target='_blank'>I'm feeling lucky</a>`;

async function fetchResults(userInput) {
 try {
   const result = await fetch(searchUrl + userInput);
   const data = await result.json();
   const searchQuery = data.query.search;
   const totalHits = data.query.searchinfo.totalhits;
   console.log(data.query);
   totalHits === 0 ? errMsg(userInput) : renderData(searchQuery);
 } catch (error) {
   console.log(error);
 }
}

const errMsg = keyword => {
 let htmlString = `<div>
 <p>No results found for <b><i>${keyword}</i></b> in wikipedia archive</p> 
 </div>
 `;
 resultsDiv.innerHTML = "";
 resultsDiv.insertAdjacentHTML("beforeEnd", htmlString);
}

const renderData = data => {
 let htmlString = "";
 for (const item of data) {
   const url = encodeURI(mainPath + item.title);
   htmlString += `
       <div><h4>${item.title}</h4>${
     item.snippet
   }... <br>${item.timestamp.slice(0, 7)}<br>
       <a href="${url}" target="_blank">${url}</a><hr></div>
       `;
 }
 resultsDiv.innerHTML = "";
 resultsDiv.insertAdjacentHTML("beforeEnd", htmlString);
}

const createAndAppend = (tag, append, innerHTML, id, Class) => {
 const child = document.createElement(tag);
 append.appendChild(child);
 innerHTML !== undefined ? (child.innerHTML = innerHTML) : null;
 id !== undefined ? (child.id = id) : null;
 Class !== undefined ? (child.className = Class) : null;
 return child;
}

const mainDiv = createAndAppend("div", document.body, null, "mainDiv");
const logoDiv = createAndAppend("div", mainDiv, null, "logoDiv");
const resultsDiv = createAndAppend("div", document.body, null, "resultsDiv");
const logo = createAndAppend("img", logoDiv, null, "logo");
logo.src = "images/Wikipedia-logo-v2.svg";
logo.align = "center";
const searchInput = createAndAppend("input", mainDiv);
searchInput.placeholder = "search";
searchInput.name = "q";
searchInput.required;
const searchInputButton = createAndAppend("button", mainDiv, "Search wiki");
createAndAppend("button", mainDiv, randomSearch());
createAndAppend("footer", document.body);

searchInputButton.addEventListener("click", () => {
  searchInput.value === ""
    ? alert("type something!")
    : fetchResults(searchInput.value);
});

