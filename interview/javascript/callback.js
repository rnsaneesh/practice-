/*function  SJITCollege(message,a){
    console.log(message);
    a();
}
function callbackSJIT(){
    console.log("welocme back to sjit ");
}
SJITCollege("welcome to sjit",callbackSJIT);*/

function formsubmission(callb){
    if(callb())
        console.log("form submission successful");
    else{
        console.log("form submission unsuccesful");
    }

}
function formvalidation(){
    console.log("form validation success");
    return true;
}
formsubmission(formvalidation);