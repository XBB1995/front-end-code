class Promise {
    // executor 传入的参数
    constructor(executor) {
        this.status = 'pendding'
        this.value = undefined
        this.reason = undefined
        // 存放成功的回调函数
        this.onResolveCallbacks = []
        // 存放失败的回调函数
        this.onRejectedCallbacks = []
        // 定义resolve函数
        let resolve = (data)=>{
            if (this.status === 'pendding') {
                this.status = 'resolve'
                this.value = data
                this.onResolveCallbacks.forEach(fn=>fn())
            }
        }
        // 定义reject函数
        let reject = data =>{
            if (this.status === 'pendding') {
                this.status = 'reject'
                this.reason = data
                this.onRejectedCallbacks.forEach(fn=>fn())
            }
        }
        // executor方法可能会抛出异常
        try {
            executor(resolve,reject)
        } catch (e) {
            // 如果在函数中抛出异常则将它注入reject
            reject(e)
        }
    }
    // then
    // then(onFufilled, onRejected) {
    //     if (this.status === 'resolve') {
    //         onFufilled(this.value)
    //     }
    //     if (this.status === 'reject') {
    //         onRejected(this.reason)
    //     }
    //     if (this.status === 'pendding') {
    //         this.onResolveCallbacks.push(()=>{
    //             let x = onFufilled(this.value)
    //             resolvePromise(promise2,x,resolve,reject)
    //         })
    //     }
    // }

}

