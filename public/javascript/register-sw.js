if (navigator.serviceWorker.controller) {
  console.log("Active Service worker found");
} else {
  navigator.serviceWorker
    .register(serviceWorker.js, { scope: ".././" })
    .then(function (reg) {
      console.log("Service worker registered");
    });
}
