const C='ct1',A=['./','index.html','manifest.json','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.oninstall=e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)));
self.onfetch=e=>{if(e.request.method=='GET'&&new URL(e.request.url).origin==location.origin)e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(C).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request)))};
