function nameInput() {
  var greeting = document.getElementById('welcome');
  var fname = document.getElementById('fname');
  var mname = document.getElementById('mname');
  var lname = document.getElementById('lname');

  greeting.innerHTML = "Welcome To Kaffa Coffee, " + fname.value + " " + mname.value + ". " + lname.value + "!";

  var loopCount = document.getElementById('fizzbuzzLoop1');
  var maxNum = 140;
  loopCount.innerHTML = "";

    for (var i = 1; i <= maxNum ; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        loopCount.innerHTML += i + " more special Kaffa Espresso and Macchiato<br>";
      }
      else if (i % 3 === 0) {
        loopCount.innerHTML += i + " more special Kaffa Espresso <br>";
      }
      else if (i % 5 === 0) {
        loopCount.innerHTML += i + " more special Kaffa Macchiato<br>";
      }
      else {
        loopCount.innerHTML += i + " more special Kaffa Coffee<br>";
      }
    }
}