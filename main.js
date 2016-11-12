 /*global firebase*/
 /*global $*/
 var config = {
    apiKey: "AIzaSyC4sa5bUPRkMCdrEbZ5x8G_lg5uLuLwroQ",
    authDomain: "chat-app-4d538.firebaseapp.com",
    databaseURL: "https://chat-app-4d538.firebaseio.com",
    storageBucket: "chat-app-4d538.appspot.com",
    messagingSenderId: "895862420876"
};
firebase.initializeApp(config);

var chatData = firebase.database().ref();
var thisChatAnimal = "Cow";

function findKeyword(response){
      var name = thisChatAnimal;
      var text = response;
      chatData.push({name: name, text: text});
      $('#messageInput').val('');
}

function pushMessage(event)
{
  if (event.keyCode == 13)
  {
    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    chatData.push({name: name, text: text});
    $('#messageInput').val('');
    var text2 = text.trim();

    if (text2.indexOf('trump') >= 0 )
    {
      findKeyword('Moo-ve to Canada');
    }else if(text2.indexOf('unicorn') >= 0)
    {
      findKeyword('Those are not real');
    }else if(text2.indexOf('hi') >= 0) //|| text2.indexOf('hey') >= 0)
    {
            // ||(text2.indexOf('hello') >= 0)
            // ||(text2.indexOf('greetings') >= 0)
            // ||(text2.indexOf('salutation') >= 0)
            // ||(text2.indexOf('address') >= 0)
            // ||(text2.indexOf('yo') >= 0)
            
    
      findKeyword('Moo there!! cow greets you');
    }else{
      findKeyword('yo');
    }
  }

$('#messageInput').keypress(pushMessage);
chatData.on("child_added", showMessage);
}
function showMessage(msg) {
  var message = msg.val();
  var messageSender = message.name;
  var messageContent = message.text;

  var messageEl = $("<div/>").addClass("message");
  var senderEl = $("<span/>").text(messageSender + ": ");
  var contentEl = $("<span/>").text(messageContent);
  
  messageEl.append(senderEl);
  messageEl.append(contentEl);
  $('#messages').append(messageEl);
}

