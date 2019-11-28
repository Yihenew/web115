function nameInput() {
  var greeting = document.getElementById('welcome');
  var fname = document.getElementById('fname');
  var mname = document.getElementById('mname');
  var lname = document.getElementById('lname');

  greeting.innerHTML = "Welcome To Kaffa Coffee, " + fname.value + " " + mname.value + ". " + lname.value + "!";

  var loopCount = document.getElementById('fizzbuzzLoop0');
  var maxNum = window.prompt("How many coffee did you need " + fname.value + " ?");
  loopCount.innerHTML = "";
			
    while (maxNum > 125) {
      var maxNum = window.prompt("Please enter the number less than or equal to 125.\nHow many coffee did you need " + fname.value + " ?");
    }
    for (var i = 1; i <= maxNum ; i++) {
      if (i % 2 === 0) {
        loopCount.innerHTML += i + " more coffee the number is even.<br>";
      }
      else {
        loopCount.innerHTML += i + " more coffee the number is odd.<br>";
      }
    }
}