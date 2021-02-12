function callback(){
    console.log('Timeout completed');
}

console.log('Start');
setTimeout(callback,3000);
console.log('Eng');