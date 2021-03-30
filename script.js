function range()
{
  rate = document.getElementById("rate").value;
  document.getElementById("spanrate").innerHTML = rate + "%";
}
function compute()
{
  principal = document.getElementById("principal").value;
  rate = document.getElementById("rate").value;
  years = document.getElementById("years").value;
  amount = (principal*rate*years)/100;
  if(principal==""){
    alert("Please enter amount to compute interest.");
    onfocus = document.getElementById("principal");
    return false;
  };
  if (principal<=0){
    alert("Please check amount must be greater than zero.");
    onfocus = document.getElementById("principal");
    return false;
  }
  var Y = new Date();
  var year = parseInt(Y.getFullYear()) + parseInt(years);
  document.getElementById("result").innerHTML = "<br>If you deposit " + principal + ",<br>" + "at an interest rate of " + rate + "%.<br>" + "You will receive an amount of " + amount + ",<br>" + "in the year " + year + ".<br>"
  return true;
}
