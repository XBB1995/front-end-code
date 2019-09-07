function fn(arr){
    return arr.reduce((prev,cur)=>{
        // return prev.concat(Array.isArray(cur)?fn(cur):cur)
        return [...prev,...Array.isArray(cur)?fn(cur):cur]
    },[])
}