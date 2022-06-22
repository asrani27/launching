const cacheName = "launching-aplikasi-banjarmasin-pintar"
const assets = [
    "/",
    "/index.html",
    "/background.jpg",
    "/button.png",
    "/logo.png",
    "/video.mp4",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})