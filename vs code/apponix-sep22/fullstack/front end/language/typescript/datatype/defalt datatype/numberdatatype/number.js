var mynum = 20;
console.log(mynum);
var num5 = new Number(5);
console.log(num5);
var mystring = "hello";
console.log(mystring);
var mystring1 = new String('hello  i am');
console.log(mystring1);
var mobile = /** @class */ (function () {
    function mobile() {
        this.camara = 2;
        this.speaker = true;
    }
    return mobile;
}());
var mymobile = new mobile();
console.log(mymobile);
