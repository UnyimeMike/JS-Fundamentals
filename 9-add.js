// const arg = process.argv[2];          
// const size = parseInt(arg);  

const firstArg = process.argv[2];
const secondArg = process.argv[3];
const firstnumber = parseInt(firstArg);
const secondnumber = parseInt(secondArg);

function add(a,b){
    return a + b;
}

if (!isNaN(firstnumber) && !isNaN(secondnumber)){
    console.log(add(firstnumber, secondnumber));
}else {
    console.log(NaN);
}