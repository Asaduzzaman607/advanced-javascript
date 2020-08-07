const numbers =[3,4,6,7,8];
const output =[];
for(let i=0; i<numbers.length;i++){
    const element = numbers[i];
    const result = element*element;
    output.push(result);
}
console.log(output);

const numbers =[3,4,6,7,8];
function square(element){
    return element*element;

}

const result=numbers.map(function(element)//element,index,array
{
   return element*element;

}
)
console.log(result);

const numbers =[3,4,6,7,8];
const result= numbers.map(x=>x*x);
console.log(result);