const CACHE_NAME="water-system-pro-v3";
const ASSETS=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
 const r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==self.location.origin)return;
 e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res&&res.ok){const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put(r,copy));}return res;}).catch(()=>r.mode==="navigate"?caches.match("./index.html"):Response.error())));
});