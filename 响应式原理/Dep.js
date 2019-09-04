// 订阅器 负责 储存订阅者，通知订阅者
export default class Dep {
    constructor() {
        this.subs = new Map()
    }
    // 添加订阅者
    addSub(key, sub) {
        const currentSub = this.subs.get(key)
        if (currentSub) {
            currentSub.add(sub)
        } else {
            this.subs.set(key, new Set([sub]))
        }
    }
    // 通知订阅者
    notify(key) {
        if (this.subs.get(key)) {
            this.subs.get(key).forEach(sub=>{
                sub.update()
            })
        }
    }
}