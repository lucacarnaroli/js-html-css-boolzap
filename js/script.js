$(document).ready(
  function () {
    $('.submit').click(
      function (){
        sendMessage()
        setTimeout(received,2000);
        clearTimeout();


      }


    );



  }
);


function sendMessage(){
  var textMessage = $('.testo-messaggio').val();
  if (textMessage.length != 0) {
    var newMessage = $('.template > .message').clone().addClass('send');
    newMessage.find('.message-text').text(textMessage);
    $('.sfondo').append(newMessage);
  }
}
// ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
function received() {
  var newMessage = $('.template-received > .message-received').clone().addClass('received');
  newMessage.find('.message-text-re');
  $('.sfondo').append(newMessage);
}





// $('input').keydown(function(){ console.log(event.which);
//   if (event.which == 13) {
//     var message = $('.testo-messaggio').clone().addClass('msg-green');
//     $('.sfondo').append(message);
//    }
//  }
// );
