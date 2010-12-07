function newMessagePostedToDisplay(lineNumber)
{
  // Do Something With New Message

  // pretty hackish. would be better if i could find a way to get the
  // nick here, and any highlight words that may be in the message.
  // would be awesome if the app just threw all highlight words in
  // their own spans for me
  //
  // var newLine = document.getElementById("line" + lineNumber);
  //   var spans = newLine.getElementsByTagName("span");
  //   var nickText = "<span class=\"nick_highlight\">" + "thorncp" + "</span>";
  //   var fuck = spans[2].innerHTML;
  //   fuck = fuck.replace("thorncp", nickText);
  //   spans[2].innerHTML = fuck;
  //   var x = 42;
}

/* The following function calls are required. Add additonal code above it. */
function on_url() { app.setUrl(event.target.innerHTML); }
function on_addr() { app.setAddr(event.target.innerHTML); }
function on_chname() { app.setChan(event.target.innerHTML); }
function on_nick() { app.setNick(event.target.parentNode.parentNode.getAttribute('nick')); }