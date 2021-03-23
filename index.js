function showMessages() {
}

function sendMessage() {
  var writeMessage = document.getElementById("message").value;
  var fs = require('fs');
  fs.writeFile('messages.txt', writeMessage, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

showMessages()
