var myarry = [1, 2, 'hello'];
console.log(myarry);
myarry.push("hdishf");
var myarry2 = [1, 2, 3, "hello"];
console.log(myarry2);
myarry2.pop();
var myarry2 = [1, 2, 'gfggd'];
function state() {
    console.log(myarry2);
    var user = document.getElementById('root').value;
    console.log(user);
    myarry2.push(user);
    console.log(myarry2);
}
