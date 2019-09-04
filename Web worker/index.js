let worker = new Worker('worker.js')
worker.postMessage(40)
worker.onmessage = function (event) {
    let data = event.data
    console.log(data);
}
worker.onerror = function (eve) {
    console.log(eve.filename, eve.lineno, eve.message)
}