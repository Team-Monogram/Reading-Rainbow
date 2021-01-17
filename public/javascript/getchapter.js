// getchapter.js will fetch the scripter cloud function by getting chapter
// information with url parameters

function get_chapter(url) {
  url =
    "https://us-central1-reading-rainbow.cloudfunctions.net/stringer?url=" +
    url;
  fetch(url, { mode: 'cors'})
    .then(response => response.text())
    .then(contents => {
      var element = document.getElementById("info");
      element.innerHTML = contents;
    })
    .catch(() =>
      console.log("Can’t access " + url + " response. Blocked by browser?")
    );
}
