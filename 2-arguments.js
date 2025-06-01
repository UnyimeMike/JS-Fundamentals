const Me = process.argv.slice(2);

if(Me.length === 0){
    console.log('No argument');
}else if (Me.length === 1){
     console.log('Arguement found');
}else {
    console.log('Arguments found');
}