const cacheName = "myAppCache";

// Cache all the files to make a PWA
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./gallery/index.html",
        "./video/index.html",
        "./images/image2.png",
        "./images/image3.png",
        "./images/logo192.png",
        "./sw.js",
        "./manifest.json",
        "./script.js",
        "./style.css",
        "./icons/appointment.svg",
        "./icons/email.svg",
        "./icons/gallery.svg",
        "./icons/phone.svg",
        "./icons/play.svg",
        "./icons/share.svg",
        "./icons/whatsapp.svg",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .open(cacheName)
      .then((cache) => cache.match(event.request, { ignoreSearch: true }))
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
