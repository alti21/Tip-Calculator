//first let user enter how much percent they want to tip
//then let user enter bill amount
//then tip should be calculated


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
    //alert("Tip value is " + tip);
    document.querySelector("p").innerHTML = tip;
    event.preventDefault();
   // var out = document.createElement("p");


   // var t =  document.createTextNode("Paragraph is created."); 
  //  out.appendChild(t); 
   // document.body.appendChild(out); 

   // out.innerHTML = tip;
});

