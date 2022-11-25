//console.log(1)
//setTimeout(()=>{
//console.log(2)
//},2000)//set time out one time only out put
//console.log(3)
//setinterval
//console.log(4)
//console.log(5)
//setInterval(()=>{
//console.log(6)
//console.log(7)
//},3000)//set interval repet function 
var initailsec = 0;
var initailstateofmunites = 0;
var initailstateofhours = 0;
setInterval(function () {
    if (initailsec == 10) {
        initailstateofmunites++;
        initailstateofmunites == 10;
        initailstateofhours++;
        return initailsec;
        if (initailsec) {
            initailstateofmunites++;
            initailstateofmunites == 10;
            initailstateofhours++;
        }
    }
    console.log("sec:", initailsec++, "munites:", initailstateofmunites + 1, initailstateofhours + 1, "hours");
}, 1000);
