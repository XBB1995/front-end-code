self.addEventListener('fetch', function (e) {
    // 如果有cache则直接返回， 否则通过fetch请求
    e.respondWith(
        caches.match(e.request)
            .then(function (cache) {
                return cache || fetch(e.request)
            })
            .catch(function (err) {
                console.log(err);
                return fetch(e.request)
            })
    )
})