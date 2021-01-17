// getchapter.js will fetch the scripter cloud function by getting chapter
// information with url parameters

function prev_chapter(url) {
  url =
    "https://us-central1-reading-rainbow.cloudfunctions.net/previous_chapter?url=" +
    url;
  rooturl = "https://www.royalroad.com";
  fetch(url, {mode: 'no-cors'})
    .then(response => response.text())
    .then(contents => {
      var element = document.getElementById("previous");
      var button = `<button style="display: flex;
      color: black;
      justify-content: center;
      float: left;
      text-decoration:none;
      font-size:18px;
      width: 100px;
      padding: 10px 5px;
      margin: 10px;
      background-color: #E0A6AA;" onclick = "get_chapter('${rooturl + contents}')">Next</button>`;
      globalurl = rooturl + contents;
      element.innerHTML = button;
    })
    .catch(() =>
      console.log("Can’t access " + url + " response. Blocked by browser?")
    );
}
