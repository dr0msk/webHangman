var word = "Antipol";
var counter = 0;
var toGuess = [];
var wordList = word.toUpperCase().split("");
var hangDict = {
    0: " \n \n \n \n ",
    1: ' \n \n \n \n∆',
    2: ' \n \n \n|\n∆',
    3: ' \n \n|\n|\n∆',
    4: ' \n|\n|\n|\n∆',
    5: '____\n|\n|\n|\n∆',
    6: '____\n|  @\n|\n|\n∆',
    7: '____\n|  @\n| /\n|\n∆',
    8: '____\n|  @\n| /0\n|\n∆',
    9: '____\n|  @\n| /0\\ \n|\n∆',
    10: '____\n|  @\n| /0\\ \n|  ∏  \n∆'
}

for (var n = 0; n < word.length; n++) {
  toGuess.push("_ ");
};

$(".solut").text(toGuess.join(""))

$(".hangman").text(hangDict[counter])
for (var i = 0; i < 26; i++) {
  document.querySelectorAll(".keyboard__key")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var letter = this.innerHTML;
  document.querySelector("." + this.innerHTML).style.backgroundColor = "#18191A";
  document.querySelector("." + this.innerHTML).removeEventListener("click", handleClick);
  if (wordList.includes(letter)) {
    for (var j = 0; j < wordList.length; j++) {
      if (wordList[j] === letter) {
        toGuess[j] = letter + " ";
        $(".solut").text(toGuess.join(""))
        console.log(wordList.join(" ") + toGuess.join(""));
        if (toGuess.join("") === (wordList.join(" ") + " ")) {

          $("ttl").text("Gewonnen!")
          for (var i = 0; i < 26; i++) {
            document.querySelectorAll(".keyboard__key")[i].removeEventListener("click", handleClick);
            document.querySelectorAll(".keyboard__key")[i].style.backgroundColor = "#18191A";}
        }
      };
    };
    console.log("happy");
  } else {
    counter++;
    $(".hangman").text(hangDict[counter])
    if (counter === 10) {
      $("ttl").text("Verloren! Gesucht war: " + word)
      for (var i = 0; i < 26; i++) {
        document.querySelectorAll(".keyboard__key")[i].removeEventListener("click", handleClick);
        document.querySelectorAll(".keyboard__key")[i].style.backgroundColor = "#18191A";
      }
    }
  }
};
