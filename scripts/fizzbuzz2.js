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
  var fNum = 2;
  var sNum = 5;

  greeting.innerHTML = "Welcome To Kaffa Coffee Shop <br>" + fname.value + " " + mname.value + ". " + lname.value + "!";

  var loopCount = document.getElementById('fizzbuzzLoop1');
  var maxNum = 140;
  loopCount.innerHTML = "";

    for (var i = 1; i <= maxNum ; i++) {
      if (checkDivision(i, fNum) && checkDivision(i, sNum)) {
        loopCount.innerHTML += i + ". It's time for Coffee and Espresso<br>";
      }
      else if (checkDivision(i, sNum)) {
        loopCount.innerHTML += i + ". It's time for Espresso<br>";
      }
      else if (checkDivision(i, fNum)){
        loopCount.innerHTML += i + ". It's time for Coffee<br>";
      }
      else {
        loopCount.innerHTML += i + " <br>";
      }
    }
}