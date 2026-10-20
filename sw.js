// Plan Level Fit 60 — funciona sin internet.
// Al subir una versión nueva de index.html, cambia este número para forzar la actualización.
const VERSION = "v1";
const CACHE = "plan-lf60-" + VERSION;
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  // La app: primero internet (para recibir cambios), si no hay señal usa la copia guardada.
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put("./index.html", c)); return r; })
      .catch(() => caches.match("./index.html")));
    return;
  }
  // Íconos y tipografías: primero la copia guardada.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r && (r.ok || r.type === "opaque")) { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); }
    return r;
  }).catch(() => hit)));
});
