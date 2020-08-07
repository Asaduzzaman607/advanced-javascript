//falsy:
//false
//0
//""
//undefined
//NaN

//Truthy:
//'0' ' ' [] {} 
//'false'


let name=12;
console.log(name);
if(name || name==0){
    console.log("condition is true")
}else{
    console.log("consition is false")
}