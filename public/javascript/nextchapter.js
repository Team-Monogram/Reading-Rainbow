// nextchapter.js will fetch the nextchapter cloud function by getting the chapter information
// of the next chapter with url parameters

function next_chapter(url) {
  url =
    "https://us-central1-reading-rainbow.cloudfunctions.net/next_chapter?url=" +
    url;
  rooturl = "https://www.royalroad.com";
  fetch(url, { mode: 'cors'})
    .then(response => response.text())
    .then(contents => {
      var element = document.getElementById("next");
      var button = `<button style="display: flex;
      color: black;
      justify-content: center;
      float: left;
      text-decoration:none;
      font-size:18px;
      width: 100px;
      padding: 10px 5px;
      margin: 10px;
      background-color: #E0A6AA;" onclick = "get_chapter('${rooturl + contents}')">Previous</button>`;
      globalurl = rooturl + contents;
      element.innerHTML = button;
    })
    .catch(() =>
      console.log("Can’t access " + url + " response. Blocked by browser?")
    );
}
