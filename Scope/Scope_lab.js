var globalVar = "I am global variable";
let globalLet = "Let i am also global but i'm specific by user";
const globalConst = "I'm global fixed";
{
var blockVar = "I'm Var limited by specific";
let blockLet = "I'm Let limited by specific";
const blockConst = "I'm const limited by specific";
}
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
console.log(blockVar);
console.log(blockLet);
function show(){
    var functionVar = "I'm var with block scope";
    let functionLet = "I'm let with block scope";
    const functionConst = "I'm scope with block scope";
}
show();
//console.log(functionVar);
//console.log(functionLet);
//console.log(functionConst);
