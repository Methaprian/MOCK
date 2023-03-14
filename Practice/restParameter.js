function addition(...args) {
    let sum=0
    for (let i = 0; i < args.length; i++) {
        sum +=args[i]
    }
    return sum
}

console.log(addition(1,5,20,45,65));
console.log(addition(1,5,20,45,-65));