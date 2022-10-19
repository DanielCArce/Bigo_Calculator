try {
  const PRECACHE = "precache-v1.1.2";
  const RUNTIME = "runtime";

  // A list of local resources we always want to be cached.
  const PRECACHE_URLS = [
    `/`, // Alias for index.html
    `/apoyo_cruzado`, // Alias for index.html
    `/intercambio_semillas_diamantes`, // Alias for index.html
    `/porcentaje_latam`, // Alias for index.html
    "manifest.json",
    "favicon.svg",
    //"/api/apoyoCruzado",
    //"/api/calculate",
    //"/api/exchangeSeeds",
  ];

  // The install handler takes care of precaching the resources we always need.
  self.addEventListener("install", (event) => {
    event.waitUntil(
      caches
        .open(PRECACHE)
        .then((cache) => cache.addAll(PRECACHE_URLS))
        .then(self.skipWaiting())
    );
  });
  // The activate handler takes care of cleaning up old caches.
  self.addEventListener("activate", (event) => {
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
      caches
        .keys()
        .then((cacheNames) => {
          return cacheNames.filter(
            (cacheName) => !currentCaches.includes(cacheName)
          );
        })
        .then((cachesToDelete) => {
          console.log("cache is deleting");
          return Promise.all(
            cachesToDelete.map((cacheToDelete) => {
              return caches.delete(cacheToDelete);
            })
          );
        })
        .then(() => self.clients.claim())
    );
  });

  // The fetch handler serves responses for same-      	origin resources from a cache.
  // If no response is found, it populates the runtime cache with the response
  // from the network before returning it to the page.
  self.addEventListener("fetch", (event) => {
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(self.location.origin)) {
      if (event.request.method === "POST" || event.request.method === "PUT") {
        event.respondWith(fetch(event.request));
      } else {
        event.respondWith(
          caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }

            return caches.open(RUNTIME).then((cache) => {
              return fetch(event.request, {}).then((response) => {
                // Put a copy of the response in the runtime cache.
                return cache.put(event.request, response.clone()).then(() => {
                  return response;
                });
              });
            });
          })
        );
      }
    }
  });
} catch (e) {
  console.log(e);
}