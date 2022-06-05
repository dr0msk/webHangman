$("h1").text("Hangman");

var figlet = require('figlet');

function figlt(x) {
  figlet.text(x, {
      font: 'ogre',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true
  }, function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      console.log(data);
  });
}


$("h1").text("Hangman");


var hang_dict = {
    0: ' <br> <br> <br> <br> ',
    1: ' <br> <br> <br> <br>∆',
    2: ' <br> <br> <br>|<br>∆',
    3: ' <br> <br>|<br>|<br>∆',
    4: ' <br>|<br>|<br>|<br>∆',
    5: '____<br>|<br>|<br>|<br>∆',
    6: '____<br>|  @<br>|<br>|<br>∆',
    7: '____<br>|  @<br>| /<br>|<br>∆',
    8: '____<br>|  @<br>| /0<br>|<br>∆',
    9: '____<br>|  @<br>| /0\ <br>|<br>∆',
    10: '____<br>|  @<br>| /0\ <br>|  ∏  <br>∆'
}

$("ttl").text("test");
