function  SJITCollege(message,a){
    console.log(message);
    a();
}
function callbackSJIT(){
    console.log("welocme back to sjit ");
}
SJITCollege("welcome to sjit",callbackSJIT);