let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
console.log(parseParam(url));

function parseParam(url) {
    const paramsStr = /.+\?(.+)/.exec(url)[1]
    const paramsArr = paramsStr.split("&")
    let paramsObj = {}
    paramsArr.forEach(param => {
        if (param.includes("=")) {
            let [key, val] = param.split("=")
            // 解码
            val = decodeURIComponent(val)
            val = /^\d+$/.test(val) ? parseInt(val) : val
            // 如果已经有key值 则使用concat连接
            if (paramsObj.hasOwnProperty(key)) {
                paramsObj[key] = [].concat(paramsObj[key], val)
            } else {
                paramsObj[key] = val
            }
        } else {
            paramsObj[param] = true
        }
    })
    return paramsObj
}