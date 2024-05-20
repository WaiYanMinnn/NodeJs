module.exports =(x,y,callback)=>{
    if(x<=0 || y<=0){
        callback(new Error(`Rectangle dimensions must be greater than zero. Recieved:${x}, ${y}\n\n`));

    }else {
        setTimeout(()=>{
            callback(null,{
                parameter :()=> 2* (x+y),
                area :()=> x*y
            }
            )
        },2000 );
    }
};










