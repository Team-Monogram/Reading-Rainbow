fetch('https://us-central1-reading-rainbow.cloudfunctions.net/stringer?url=https://www.royalroad.com/fiction/21220/mother-of-learning/chapter/455877/afterword')
  .then((response) => { response.json() })
  .then((data) => { console.log('data') })
  .catch((err) => {console.log('fetch.error:' + err)});
