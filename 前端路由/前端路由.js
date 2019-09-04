class Routers {
    constructor() {
        this.routes = {}
        this.currentUrl = ''
        this.history = []
        this.currentIndex = this.history.length - 1
        // 防止this指向window
        this.refresh = this.refresh.bind(this)
        this.backOff = this.backOff.bind(this)
        this.isBack = false
        window.addEventListener('load', this.refresh, false)
        window.addEventListener('hashchange', this.refresh, false)
    }

    //将path路径与对应的callback函数储存
    route(path, callback) {
        this.routes[path] = callback || function () {
        }
    }

    // 刷新
    refresh() {
        this.currentUrl = location.hash.slice(1) || '/'
        // 并非回退操作
        if (!this.isBack) {
            if (this.currentIndex < this.history.length - 1) {
                this.history = this.history.slice(0, this.currentIndex + 1)
            }
            this.history.push(this.currentUrl)
            this.currentIndex++
        }
        // hash改变后执行对应的callback函数
        this.routes[this.currentUrl]()
        this.isBack = false
    }

    // 后退功能
    backOff() {
        this.isBack = true
        this.currentIndex <= 0
            ? this.currentIndex = 0
            : this.currentIndex = this.currentIndex - 1
        location.hash = `#${this.history[this.currentIndex]}`
        this.routes[this.history[this.currentIndex]]()
    }
}

window.Router = new Routers()
let content = document.querySelector('body')

function changeBgColor(color) {
    content.style.backgroundColor = color
}

Router.route('/', function () {
    changeBgColor('yellow')
})
Router.route('/blue', function () {
    changeBgColor('blue');
});
Router.route('/green', function () {
    changeBgColor('green');
});