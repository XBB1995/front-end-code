// 发布订阅模式
let pubSub = {
    list: {},
    subscribe: function (key, fn) {
        if (!this.list[key]) {
            this.list[key] = []
        }
        this.list[key].push(fn)
    },
    publish: function () {
        let args = arguments
        let key = [].shift.call(args)
        let fns = this.list[key]

        if (!fns || fns.length <= 0) return false

        for (let i = 0, len = fns.length; i < len; i++) {
            fns[i].apply(this, args)
        }
    },
    unSubscribe(key) {
        delete this.list[key]
    }
}

pubSub.subscribe('name', (name) => {
    console.log(`your name is ${name}`);
})
pubSub.subscribe('age', (age) => {
    console.log(`your age is ${age}`);
})

pubSub.unSubscribe("age")
pubSub.publish('age', 25)
pubSub.publish('name', 'XBB')