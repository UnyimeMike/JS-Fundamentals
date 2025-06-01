 const arg = process.argv;

// console.log(arg);

const firstArg = process.argv[2];
const convertArg =  parseInt(firstArg);

if(isNaN(convertArg)){
    console.log('Missing size');
}

for (let i = 0; i < convertArg; i++){
    console.log('x'.repeat(convertArg));
}