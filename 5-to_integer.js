 const arg = process.argv;

// console.log(arg);

const firstArg = process.argv[2];
const convertArg =  parseInt(firstArg);

if(isNaN(convertArg)){
    console.log('Not a number');
}else{
    console.log('My number:', convertArg)
}