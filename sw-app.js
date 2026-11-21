var C="ayghor-v1";
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.add("./")}).catch(function(){}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).catch(function(){return caches.match("./")}))});
