function test() {
  let url = 'https://us-central1-reading-rainbow.cloudfunctions.net/stringer?url=https://www.royalroad.com/fiction/21220/mother-of-learning/chapter/455877/afterword';
  fetch(url)
    .then(response => response.text())
    .then(contents => console.log(contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}