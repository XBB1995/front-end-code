(() => {
    let data = {
        method: "post",
        a: "abc",
        b: 123
    }

    function transformData(data) {
        let newData = []
        for (let idx in data) {
            newData.push(encodeURIComponent(idx) + "=" + encodeURIComponent(data[idx]))
        }
        return newData.join("&")
    }

    let xhr = new XMLHttpRequest()
    // 三个参数
    // 1.请求使用方法名
    // 2.请求路径 接口地址
    // 3.请求是否异步
    xhr.open("post", '/api/get', true)
    // 设置open参数并不会发送
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
                console.log(xhr.responseText);
            } else {
                throw new Error("error")
            }
        }
    }
    // 设置携带cookie 需要后端ACAC配合 才能跨域携带cookie
    xhr.withCredentials = true
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.send(transformData(data))
})()