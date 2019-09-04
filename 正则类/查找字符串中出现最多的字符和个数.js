let str = "abcabcabcbbccccc";
let num = 0;
let char = '';

function getCount(str) {
    const obj = {}
    Array.from(str).forEach(s => {
        if (obj[s]) obj[s]++
        else obj[s] = 1
        if (obj[s]>num){
            num = obj[s]
            char = s
        }
    })
}

getCount(str)

console.log(`字符最多的是${char}，出现了${num}次`);