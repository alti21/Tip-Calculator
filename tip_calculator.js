function tipCalculator(bill) {
    var percentage;
    if(bill < 50)
    {
        percentage = .2;
    }
    else if(bill >= 50 && bill < 200)
    {
        percentage = .15;
    }
    else {
        percentage = .1;
    }
    return percentage * bill;
}

var val = document.querySelector("#bill").value;





document.querySelector("#calc").addEventListener("click",function() {
    var val = parseInt(document.querySelector("#bill").value);
    var tip = tipCalculator(val);
    alert("Tip value is " + tip);
});

