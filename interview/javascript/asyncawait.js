/*function asaw(){
    console.log("hello");
}
asaw();*/

/*async function asaw() {
    
    console.log("hello");
    
}
console.log(asaw());//output hello 
                    //promise {undefined}*/


async function asaw() {
    setTimeout(function(){
        console.log("hello");
    },5000);
    
}
console.log(asaw());