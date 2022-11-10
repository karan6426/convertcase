function reverseString() {
    var str = document.getElementById('reverseElement').value;
    var newString = "";

    for (var i=str.length-1; i>=0; i--){
        newString += str[i];
    }
    document.getElementById('showReverseElement').value = newString;
}



  // Load function every 0 second
  setInterval(function () {
    textarea();
    charactercount();
  }, 0);

  function textarea() {
    return $('textarea').val();
  }

  function charactercount() {
    $('#showcount').text(textarea().length);
  }


function countWord2() {
 
    // Get the input text value
    var words = document
        .getElementById("reverseElement").value;

    // Initialize the word counter
    var count = 0;

    // Split the words on each
    // space character
    var split = words.split(' ');

    // Loop through the words and
    // increase the counter when
    // each split word is not empty
    for (var i = 0; i < split.length; i++) {
        if (split[i] != "") {
            count += 1;
        }
    }

    // Display it as output
    document.getElementById("show")
        .innerHTML = count;
}