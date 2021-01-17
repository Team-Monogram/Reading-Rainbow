// getchapter.js will fetch the scripter cloud function by getting chapter
// information with url parameters

function prev_chapter(url) {
  url =
    "https://us-central1-reading-rainbow.cloudfunctions.net/previous_chapter?url=" +
    url;
  rooturl = "https://www.royalroad.com";
  fetch(url)
    .then((response) => response.text())
    .then((contents) => {
      var element = document.getElementById("previous");
      var button = `<button onclick = "get_chapter(${
        rooturl + contents
      })"></button>`;
      globalurl = rooturl + contents;
      element.innerHTML = button;
    })
    .catch(() =>
      console.log("Can’t access " + url + " response. Blocked by browser?")
    );
}
