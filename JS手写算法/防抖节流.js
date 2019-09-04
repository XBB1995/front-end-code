// 简化防抖
const debounce = (fn, delay, callNow) => {
    let timer = null
    return (...args) => {
        if (timer) clearTimeout(timer)
        if (!timer&&callNow) fn.apply(this, ...args)
        timer = setTimeout(() => {
            fn.call(this, ...args)
        }, delay)
    }
}
// 简化节流 定时器
const throttle = (fn, delay = 500) => {
    let flag = true
    return (...args) => {
        if (!flag) return
        flag = false
        setTimeout(() => {
            fn.apply(this, args)
            flag = true
        }, delay)
    }
}
// 简化节流 时间戳
const throttle2 = (fn, delay = 500) => {
    let prev = 0
    return (...args)=>{
        let now = +new Date()
        if (now - prev > delay) {
            prev = now
            fn.apply(this, args)
        }
    }
}