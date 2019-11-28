function checkDivision(num, divisor) {
  var isDivisible = false;
  if(num % divisor === 0) {
	isDivisible = true;
  }
  return isDivisible;
}

function nameInput() {
  var greeting = document.getElementById('welcome');
  var fname = document.getElementById('fname');
  var mname = document.getElementById('mname');
  var lname = document.getElementById('lname');
  var firstNum = 3;
  var secondNum = 5;
  var thirdNum = 7;

  greeting.innerHTML = "Welcome To Kaffa Coffee Shop <br>" + fname.value + " " + mname.value + ". " + lname.value + "!";

  var loopCount = document.getElementById('fizzbuzzLoop1');
  var maxNum = 140;
  loopCount.innerHTML = "";

    for (var i = 1; i <= maxNum ; i++) {
      if (checkDivision(i, firstNum) && checkDivision(i, secondNum) && checkDivision(i, thirdNum)) {
        loopCount.innerHTML += i + ". Time for Coffee, Espresso and Macchiato<br>";
      }
      else if (checkDivision(i, firstNum) && checkDivision(i, secondNum)) {
        loopCount.innerHTML += i + ". It's time for Coffee and Espresso<br>";
      }
      else if (checkDivision(i, firstNum) && checkDivision(i, thirdNum)){
        loopCount.innerHTML += i + ". It's time for Coffee and Macchiato<br>";
      }
      else if (checkDivision(i, secondNum) && checkDivision(i, thirdNum)){
        loopCount.innerHTML += i + ". It's time for Espresso and Macchiato<br>";
      }
      else if (checkDivision(i, firstNum)) {
        loopCount.innerHTML += i + ". It's time for Coffee<br>";
      }
      else if (checkDivision(i, secondNum)){
        loopCount.innerHTML += i + ". It's time for Espresso<br>";
      }
      else if (checkDivision(i, thirdNum)){
        loopCount.innerHTML += i + ". It's time for Macchiato<br>";
      }
      else {
        loopCount.innerHTML += i + " <br>";
      }
    }
}