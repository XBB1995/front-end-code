export let counter = {count: 1};
setTimeout(() => {
    console.log('b.js-1', counter.count)
}, 1000);