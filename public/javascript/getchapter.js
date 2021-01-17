// getchapter.js will fetch the scripter cloud function by getting chapter
// information with url parameters

function get_chapter (url) {
  fetch(url)
    .then((response) => {
      response.text();
    })
    .then((contents)) => {
      console.log(typeof(contents));
    }
    .catch(() => {
      console.log('error has occurred');
    })
}
