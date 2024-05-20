const rect=require('./rectangle.js');
function solveRect(l,w){
    console.log(`Solving for rectangle with dimension: ${l},${w}`);
    rect(l,w,(err,rectangle)=> {
        if (err){
            console.log('ERROR:',err.message);
        }
        else{
            console.log(`The parameter of the rectangle is : ${rectangle.parameter()}`);
            console.log(`Area of the rectangle is : ${rectangle.area()}\n\n`);
        }
        }
    );
    console.log('This statement is logged after the call to rect()');
}
solveRect(1,2);
solveRect(-1,2);