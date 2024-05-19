const react={
    parameter:(x,y)=> 2*(x+y),
    area:(x,y)=> x*y
};
function solveRect(l,w){
    console.log(`Solving for rectangle with dimension: ${l},${w}`);
    if(l<=0 || w <=0){
        console.log(`Rectangle dimensions must be greater than zero. Recieved:${l}, ${w}\n\n`);
    
    }else{
        console.log(`The parameter of the rectangle is : ${react.parameter(l,w)}`);
        console.log(`Area of the rectangle is : ${react.area(l,w)}\n\n`);
    }

}
solveRect(1,2);
solveRect(-1,2);