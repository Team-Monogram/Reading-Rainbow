let CACHE_NAME = "my-cache";
let urlsToCache = [
  "../css/chapter.css",
  "../css/main.css",
  "../icons/BookCover/manifest-icon-192.png",
  "../icons/manifest-icon-192.",
  "../icons/manifest-icon-512.png",
  "../javascript/getchapter.js",
  "../javascript/nextchapter.js",
  "../javascript/previouschapter.js",
  "../javascript/register-sw.js",
  "../javascript/serviceWorker.js",
  "../javascript/testfetch.js",
  "../BookCover.svg",
  "../Icon.svg",
  "../favicon.ico",
  "../manifest.json",
  "../index.html",
  "../about.html",
  "../chapter.html",
  "../robots.txt",
  "../asset-manifest.json",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", function (event) {
  var cacheWhitelist = ["pigment"];
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
