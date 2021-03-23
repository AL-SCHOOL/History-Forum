function showMessages() {
}

function sendMessage() {
  var writeMessage = document.getElementById("message").value;
  var fs = require('fs');
  fs.writeFile('messages.txt', writeMessage)
}

showMessages()
