// 监听器 监听对象 触发后通知订阅
import Dep from "./Dep";

const Observer = obj => {
    const dep = new Dep()
    return new Proxy(obj, {
        get(target, key, receiver) {
            if (dep.target) {
                dep.addSub(key, Dep.target)
            }
            return Reflect.get(target, key, receiver)
        },
        set: function (target, key, value, receiver) {
            if (Reflect.get(receiver, key) === value) {
                return
            }
            const res = Reflect.set(target, key, observify(value), receiver)
            // 当值被触发更改的时候，触发Dep的通知方法
            dep.notify(key)
            return res
        }
    })
}

export default function observify(obj) {
    if (!isObject(obj)) {
        return obj
    }
    Object.keys(obj).forEach(key=>{
        obj[key] = observify(obj[key])
    })
    return Observer(obj)
}