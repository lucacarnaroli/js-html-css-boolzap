$(document).ready(
  function () {
    $('.submit').click(
      function (){
        sendMessage()
        setTimeout(received,1000);
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
    var data = new  Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours + ':' + minutes;
    newMessage.find('.ora-invio').text(time);

    $('.sfondo').append(newMessage);
    $('.testo-messaggio').val('');
  }
}
function addZero(number){
  if (number < 10) {
    number = '0' + number;
  }
  return number;
}
// ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
function received() {
  var newMessage = $('.template-received > .message-received').clone().addClass('received');
  newMessage.find('.message-text-received');
  $('.sfondo').append(newMessage);
  var data = new  Date();
  var hours = data.getHours();
  var minutes = data.getMinutes();
  var time = hours + ':' + minutes;
  newMessage.find('.ora-invio').text(time);
}
// scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
$(document).ready(
  function(){
    $('.icon-search').click(
      function search(){
        var textSearch = $('.search-contatti').val('');

        var nomeUtente = $('.nome');


          var i = 0;
          while (i < nomeUtente.length) {
           if (nomeUtente == textSearch[i]) {
             nomeUtente.hide();
           }
           i++;
          }


      }
    )

  }
);




// $('.search-contatti').keydown(function(){ console.log(event.which);
//   if (event.which == 13) {
//
//    }
//  }
// );
