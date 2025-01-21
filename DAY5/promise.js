function promise(flag){
    return new promise(function(resolve,reject){
        if (flag === 1){
        resolve("This is a promise resole Example")
        }
        else if(flag === 0){
            reject("This is promise reject Example")
        }            
    })
}
promiseEg(1).then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log(rej);
})

