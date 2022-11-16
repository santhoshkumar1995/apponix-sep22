//virtvuldom
function myheading(mydata) {
    var h1 = document.createElement('h1');
    h1.innerHTML = mydata;
    h1.style.color = 'red';
    document.getElementById('root').appendChild(h1);
}
myheading('santhosh');
myheading("kumar");
//variable declaration
//let a = 10;
//a=20;
//a='hello'; string not assing let a its humber
//let a; //any type
//a = 10; //number
//a = "hello"; //string
//a = () => {
//alert('hello');
//}; //function
//a = {
//  name: 'abc'
//}; //objact
//console.log(a.name)
//{console.log(a.alert)
//console.log(a)} unfind at same time
// let a: assinge only use (number or string func obj )
//const a; not supported
var a1 = 10;
console.log(typeof a1); //out put number
//const a1 (assing):string =1; out put error
var a3 = "hello";
console.log(typeof a3); // out put string
// no diract dickleration const assain types once u assain vallu un changeable
//function 1
function add(c, d) {
    return c + d;
}
console.log(add(1, 2)); //out put 3
//2
//c1 parameters any type 
//note function name not same in page
//paramets not accapet numbers
function addone(x, z) {
    return x + z;
}
console.log(addone('1', 2)); //out put 12('1'2)
//function addone(x:number, z:number) {
//return x + z;
//}
//console.log(addone(1, 2)); out put 3
//(return mode)
function addtwo(e, f) {
    return e + f;
}
console.log(addtwo(1, 2)); //out put 3 (e,f any if u need assing e,f:numbr string)
//var let const
//var goblely scop
//inside function localy scop
var g = 10;
console.log(window.g); //op 10
//window show in js file
//let window not show in js file
//let  g1 =10;
//console.log(window.g1); //out put undifind
//let block scop
var g1 = 10;
var g1 = 20;
console.log(g1); //out 20 var re declaration value 20
//let g1 =10;
//let g1 =20;
//console.log(g1);// op (I)dentrifier a has all ready declars 
//let no declares but ubdate value
var g2 = 10; //g2 value
g2 = 20; //update value
console.log(g2); //out put 20
var h = 10; //var global scop
function san() {
    console.log(h);
}
san();
//var h1 =10;//var global scop
//function san(){
//var b=20;(local scope)
// console.log(h1);
//}
//san();
//call (console.log(b)); error b not defind
//let h1 =10;
//function san(){
//let b=20;(local scope)
// console.log(h1);
//}
//san();
//call (console.log(b)); error b not defind
var i = 10; //var global scop
function sant() {
    var a = 20;
    return a;
}
console.log(sant()); //out put 20 //var 20 local scope in console
//with in other function
function santh() {
    var j = 10;
    return function santho() {
        var k = j + 1;
        return k;
    };
}
var santho = santh();
console.log(santho()); //out put 11 function inside function 
//var local in use to inside functon 
//booleam 
function sa(shouldinitalize) {
    if (shouldinitalize) {
        var m = 10;
    }
    return m;
}
console.log(sa(true)); //op 10
//other console
console.log(sa(true)); //op undefind 
function aa(n) {
    var n = 11;
    return n;
}
aa(1);
function summatrix(matrix) {
    var sum = 0;
    for (var p = 0; p < matrix.length; p++) {
        var currentrow = matrix[p];
        for (var p_1 = 0; p_1 < currentrow.length; p_1++) {
            sum += currentrow[p_1];
        }
    }
    return sum;
}
console.log(summatrix([[1, 2, 3], [3, 4, 5]]));
