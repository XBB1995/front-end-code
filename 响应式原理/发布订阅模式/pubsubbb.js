let pubSub = {
    dep: {},
    subscribe(key, fn) {
        if (!this.dep[key]) this.dep[key] = []
        this.dep[key].push(fn)
    },
    unSubscribe(key) {
        if (this.dep[key]) delete this.dep[key]
    },
    publish(key, ...arg) {
        let fns = this.dep[key]
        if (!fns || fns.length === 0) return false
        fns.forEach(fn => {
            fn.call(this, ...arg)
        })
    }
}

pubSub.subscribe('name', (name = "XBB", nickName="Ayo") => {
    console.log(`your name is ${name} and nickname is ${nickName}`);
})
pubSub.subscribe('age', (age = 25) => {
    console.log(`your age is ${age}`);
})

// pubSub.unSubscribe("age")
pubSub.publish('age')
pubSub.publish('name', 'XBB', "ABC")