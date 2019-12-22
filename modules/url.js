//with mainPath + item.title we can create a link to the original wiki item's page
const mainPath = "https://en.wikipedia.org/wiki/";
//a random topic of wiki
const randomPath = mainPath + "Special:Random";
//search wiki topics with user input
const searchUrl =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srsearch=";

export { mainPath, randomPath, searchUrl };
