// getchapter.js will fetch the scripter cloud function by getting chapter
// information with url parameters

function get_chapter(url) {
  console.log('Hello World');
  url = 'https://us-central1-reading-rainbow.cloudfunctions.net/stringer?url=' + url;
  fetch(url)
    .then((response) => {
      response.text();
    })
    .then((contents) => {
      document.getElementById("content").innerhtml = contents;
    })
    .catch(() => {
      console.log('error has occurred');
    })
}
