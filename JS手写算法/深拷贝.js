//JSON
// const newObj = JSON.parse(JSON.stringify(oldObj))

// 深拷贝 数组和对象均通用
function deepCopy(obj) {
    if (!obj && typeof obj !== 'object') {
        throw new Error('error arguments');
    }
    // const targetObj = obj.constructor === Array ? [] : {};
    const targetObj = Array.isArray(obj) ? [] : {};
    //只对对象自有属性进行拷贝
    Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === 'object') {
            targetObj[key] = deepCopy(obj[key]);
        } else {
            targetObj[key] = obj[key];
        }
    })
    return targetObj;
}

function deepCopy2(obj, hash = new WeakMap()) {
    if (!obj && typeof obj !== "object") throw new Error("!!!")
    if (hash.has(obj)) return hash.get(obj)
    const targetObj = Array.isArray(obj) ? [] : {}
    hash.set(obj, targetObj)
    Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === "object") {
            targetObj[key] = deepCopy2(obj[key], hash)
        } else {
            targetObj[key] = obj[key]
        }
    })
    return targetObj
}

let obj1 = {
    name: 'Ayo',
    color: [1, {id: 1, val: 2}, 3],
    innerObj: {
        name: 'inner',
        color: [2, 3, 4]
    }
}
let obj2 = deepCopy(obj1)
obj1.name = 'XBB'
obj2.color.unshift(0)
obj1.innerObj.name = 'get in'
obj1.innerObj.color.pop()
console.log(obj1);
console.log(obj2);

// 简单实现
/**
 * deep clone
 * @param  {[type]} parent object 需要进行克隆的对象
 * @return {[type]}        深克隆后的对象
 */
const clone = parent => {
    // 判断类型
    const isType = (obj, type) => {
        if (typeof obj !== "object") return false;
        const typeString = Object.prototype.toString.call(obj);
        let flag;
        switch (type) {
            case "Array":
                flag = typeString === "[object Array]";
                break;
            case "Date":
                flag = typeString === "[object Date]";
                break;
            case "RegExp":
                flag = typeString === "[object RegExp]";
                break;
            default:
                flag = false;
        }
        return flag;
    };

    // 处理正则
    const getRegExp = re => {
        var flags = "";
        if (re.global) flags += "g";
        if (re.ignoreCase) flags += "i";
        if (re.multiline) flags += "m";
        return flags;
    };
    // 维护两个储存循环引用的数组
    const parents = [];
    const children = [];

    const _clone = parent => {
        if (parent === null) return null;
        if (typeof parent !== "object") return parent;

        let child, proto;

        if (isType(parent, "Array")) {
            // 对数组做特殊处理
            child = [];
        } else if (isType(parent, "RegExp")) {
            // 对正则对象做特殊处理
            child = new RegExp(parent.source, getRegExp(parent));
            if (parent.lastIndex) child.lastIndex = parent.lastIndex;
        } else if (isType(parent, "Date")) {
            // 对Date对象做特殊处理
            child = new Date(parent.getTime());
        } else {
            // 处理对象原型
            proto = Object.getPrototypeOf(parent);
            // 利用Object.create切断原型链
            child = Object.create(proto);
        }

        // 处理循环引用
        const index = parents.indexOf(parent);

        if (index != -1) {
            // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
            return children[index];
        }
        parents.push(parent);
        children.push(child);

        for (let i in parent) {
            // 递归
            child[i] = _clone(parent[i]);
        }

        return child;
    };
    return _clone(parent);
};