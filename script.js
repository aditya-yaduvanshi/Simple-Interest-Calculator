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
  if(principal=="" || principal<=0){
    alert("Please check amount must be greater than zero.");
    document.getElementById("principal").focus();
    return false;
  };
  var Y = new Date();
  var year = parseInt(Y.getFullYear()) + parseInt(years);
  document.getElementById("result").innerHTML = "<br>If you deposit " + '<span style="background-color: yellow;">' + principal + '</span>'+ ",<br>" + "at an interest rate of " + '<span style="background-color: yellow;">' + rate + "%</span>.<br>" + "You will receive an amount of " + '<span style="background-color: yellow;">' + amount + '</span>' + ",<br>" + "in the year " + '<span style="background-color: yellow;">' + year + '</span>' + ".<br>"
  return true;
}