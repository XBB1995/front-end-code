function getNext(pattern) {
    let p = Array.from(pattern),
        next = []
    next[0] = -1
    let j = 0, k = -1
    while (j < p.length - 1) {
        if (k === -1 || p[j] === p[k]) {
            if (p[++j] === p[++k]) {
                next[j] = next[k]
            } else next[j] = k
        } else k = next[k]
    }
    return next
}

function KMP(str, pattern) {
    let s = Array.from(str),
        p = Array.from(pattern),
        i = 0,
        j = 0,
        next = getNext(pattern)
    while (i < s.length && j < p.length) {
        if (j === -1 || s[i] === p[j]) {
            i++
            j++
        } else {
            j = next[j]
        }
    }
    return j === p.length ? i - j : -1
}

console.log(KMP("BBC ABCDAB ABCDABCDABDE", "ABCDABD"));