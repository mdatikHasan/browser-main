/* console.log('first');
// setInterval(() => {
//     console.log('tik tik tik tik')
// }, 1000)

let seconds = 0;

const timeId = setInterval(() => {
    // seconds++;
    console.log(++seconds);
    if (seconds > 15) {
        clearInterval(timeId);
    }
}, 1000)

console.log('second'); */


// practice below

console.log('first');
/* setInterval(() => {
    console.log(+1)
}, 1000); */

let counter = 0;
const timeId = setInterval(()=>{
    counter++;
    // console.log(counter);
    if(counter > 10){
        clearInterval(timeId)

    }else{
        console.log(counter);
    }
},1000)
console.log('second');

setTimeout(() =>console.log("I am Superman"),1000)
console.log("I am Superwoman");