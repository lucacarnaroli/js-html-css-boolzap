$(document).ready(
  function () {
    $('.submit').click(
      function (){
        sendMessage()

      }
    );


    // $('input').keydown(function(){ console.log(event.which);
    //   if (event.which == 13) {
    //     var message = $('.testo-messaggio').clone().addClass('msg-green');
    //     $('.sfondo').append(message);
   //    }
   //  }
   // );
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
