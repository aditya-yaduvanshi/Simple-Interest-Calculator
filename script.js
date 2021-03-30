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
  amount = parseInt((principal*rate*years)/100) + parseInt(principal);
  if(principal==""){
    alert("Please enter amount to compute interest.");
    onfocus.principal;
    return false;
  };
  var Y = new Date();
  var year = Y.getFullYear();
  document.getElementById("result").innerHTML = "<br>If you deposit " + principal + ",<br>" + "at an interest rate of " + rate + "%.<br>" + "You will receive an amount of " + amount + ",<br>" + "in the year " + year + ".<br>"
  return true;
}
