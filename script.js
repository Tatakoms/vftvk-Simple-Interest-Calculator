window.onload = function(){
  var button = document.getElementById("calc");
  button.onclick = calculateInterest;
}
function calculateInterest(){
  var amountElement  = document.getElementById("amount");
  var rateElement = document.getElementById("rate");
  var timeElement = document.getElementById("time");
  var resultText = document.getElementById("result");

  var resultRow = document.getElementById("resultRow");
  var amount = amountElement.value;
  var rate = rateElement.value;
  var time = timeElement.value;

  if (amount<=0|| amount==""){
      alert("Enter a positive number");
    document.getElementById("amount").focus();
        return;}
var slider = document.getElementById("rate");
var output = document.getElementById("demo");
output.innerHTML = slider.value + "%";

slider.oninput = function() {
  output.innerHTML = this.value + "%";
}

 if (isNaN(parseInt(amount)) || isNaN(parseInt(rate)) || isNaN(parseInt(time))) {
    resultRow.style.display = "none";
    var allInputs = document.getElementsByTagName('input');
    for(i = 0; i < allInputs.length; i++){
      if(allInputs[i].value == ""){
        allInputs[i].value = "Empty!";
      }
    }
  }
  else{
    var x = ((parseInt(amount)*parseInt(rate)*parseInt(time))/100)
    var z = 2022
    var s = z+(parseInt(time))

    resultRow.style.display = "block";
    resultText.innerHTML = "If you deposit " + "<span class='yel'>" + amount +"</span>" +  ",<br> at an interest rate of " + "<span class='yel'>" + 
    rate +"%"+ "</span>" +". <br>You will receive an amount of " 
    + "<span class='yel'>" + x + "</span>"+ " <br> in the year " + "<span class='yel'>" +s +"</span>"
  }

}




