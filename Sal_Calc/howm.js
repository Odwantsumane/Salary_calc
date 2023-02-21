document.getElementById("submit"); //button
let counter = 0, counter1 = 0, counter2 = 0, 
counter3 = 0, counter4 = 0, counter5 = 0, counter6 = 0;
let amount = "";//amount
let hours =  "";
let days =  "";
let weeks =  "";
let months = "";
let day = 0, week = 0, month = 0,
    six_months = 0,
    year = 0,
    five_years = 0,
    decade = 0;
var updated = true; //inverted
// let currency = "R";

let clearIntervals = false, reload = false;

//takes inputs from the user, to update the amounts
function collect() {
    if (updated) {
        amount = document.getElementById("amount").value;//amount
        if (amount === "") return;
        updated = false; //dont allow amount to be changed
    }
    
    document.getElementById("hours").style.display = "block";
    hours = document.getElementById("hours").value;
    if (hours === "" || (hours > 24 || hours <= 0)) return;

    // Shows the message after amount has been entered
    if(amount > 23 && days === ""){ // condition: will be considered once
        document.getElementById("salary").innerHTML = "Good News, Your salary is over the minimum in SA";
        document.getElementById("mes").style.display = "block";
    }
    else {
        document.getElementById("salary").innerHTML = "Oops, Your salary is below minimum in SA";
        document.getElementById("mes").style.display = "block";
    }
    
    document.getElementById("days").style.display = "block";
    days = document.getElementById("days").value;

    if (days === "" || (days > 7 || days <= 0)) return;
    document.getElementById("mes").style.display = "none"; //hide/rmv the message on top
    document.getElementById("weeks").style.display = "block";

    weeks = document.getElementById("weeks").value;
    if (weeks === "" || (weeks > 4 || weeks <= 0) ) return;

    document.getElementById("months").style.display = "block";
    months = document.getElementById("months").value;
    if (months === ""  || (months > 12 || months <= 0)) return;

    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("submit").style.visibility = "visible";
}

//calculates the amounts based on collected input and prints it out to user
function amounts() {
    document.getElementById("submit").style.visibility = "hidden";
    document.getElementById("jst_show").style.visibility = "visible";
    if(amount === "" || hours === "" || days === ""
    || weeks === "" || months === "") return;

    day = amount * hours;
    week = day * days;
    month = week * weeks;
    six_months = month * 6;
    year = month * months;
    five_years = year * 5;
    decade = year * 10;
    
    
    //day
    var a = setInterval(
            function() {
            
            document.getElementById("dayy").innerHTML = ++counter; 
            if(counter === parseInt(day) || clearIntervals) 
                clearInterval(a); 
            }
        ,5);
    //week
    var b = setInterval(
        function() {
            
        document.getElementById("weekk").innerHTML = ++counter1; 
        if(counter1 === parseInt(week) || clearIntervals) 
            clearInterval(b); 
        }
    ,5); 

    //month
    var c = setInterval(
        function() {
            
        document.getElementById("monthh").innerHTML = ++counter2; 
        if(counter2 === parseInt(month) || clearIntervals) 
            clearInterval(c); 
        }
    ,5);  

    //six_months
    var d = setInterval(
        function() {
            
        document.getElementById("six_monthss").innerHTML = ++counter3; 
        if(counter3 === parseInt(six_months) || clearIntervals) 
            clearInterval(d); 
        }
    ,5);

    //year
    var e = setInterval(
        function() {
            
        document.getElementById("yearr").innerHTML = ++counter4; 
        if(counter4 === parseInt(year) || clearIntervals) 
            clearInterval(e); 
        }
    ,5);
    //five years
    var f = setInterval(
        function() {
            
        document.getElementById("five_yearss").innerHTML = ++counter5; 
        if(counter5 === parseInt(five_years) || clearIntervals) 
            clearInterval(f); 
        }
    ,5);

    //decade
    var g = setInterval(
        function() {
            
        document.getElementById("decadee").innerHTML = ++counter6; 
        if(counter6 === parseInt(decade)) { // when finished counting
            clearIntervals = true;
            document.getElementById("jst_show").innerHTML = "Show At Once";
        }
        if(counter6 === parseInt(decade) || clearIntervals)
            clearInterval(g); 
        }
    ,1);
    
}

// allows for stopping and shows full salary, depends on whether salary is large/small
function show() {
    if (clearIntervals) {
        document.getElementById("dayy").innerHTML = day + ".00";
        document.getElementById("weekk").innerHTML = week + ".00";
        document.getElementById("monthh").innerHTML = month + ".00",
        document.getElementById("six_monthss").innerHTML = six_months + ".00";
        document.getElementById("yearr").innerHTML = year + ".00";
        document.getElementById("five_yearss").innerHTML = five_years + ".00";
        document.getElementById("decadee").innerHTML = decade + ".00";

        if(reload) //works with the second click
            location.reload();
        reload = true;
    }
    if(reload === false)
        document.getElementById("jst_show").innerHTML = "Show At Once";
    if(reload) {//changes button name
        document.getElementById("jst_show").innerHTML = "Again";
    }
    clearIntervals = true;
}

