$(document).ready(
  function () {
    $('.submit').click(
      function (){
        sendMessage()
      }
    );

    $('.testo-messaggio').keypress(function(){
      if (event.which == 13) {
        sendMessage()
       }
     }
    );
    // 2metodo 2milestone
    $('.search-contatti').keyup(function () {
      var testoInserito = $('.search-contatti ').val().toLowerCase();
      $('li').each(function(){
        var nome = $(this).find('.nome').text().toLowerCase();
        if (nome.includes(testoInserito)==true) {
          $(this).show();
        }
        else {
          $(this).hide();
        }
       }
      )

    }
   )
 }
);

// invio messaggio
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

    $('.message-sfondo.active').append(newMessage);
    $('.testo-messaggio').val('');
    setTimeout(received,1000);
    scrollMessage();
  }
}
function addZero(number){
  if (number < 10) {
    number = '0' + number;
  }
  return number;
}
// ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// ricevi messaggio
function received() {
  var newMessage = $('.template-received > .message-received').clone().addClass('received');
  newMessage.find('.message-text-received');

  $('.message-sfondo.active').append(newMessage);
  var data = new  Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours + ':' + minutes;
  newMessage.find('.ora-invio').text(time);
  scrollMessage();
}

// se clicco su un contatto, mi cambia anche l'header del nome
$('.contatto').click(
  function() {
    var nomeContatto = $(this).find(".nome").text();
    $('.header-accesso h4').text(nomeContatto);
    var assegnazione = $(this).attr('data-contact');
    var conversazione = $('.message-sfondo[data-contact="' + assegnazione + '"]');
    $('.message-sfondo').removeClass('active');
    conversazione.addClass('active');
  }
);

$(document).on('click', '.fa-chevron-down', function() {
  $(this).parents().siblings('.menu-tendina').toggleClass('none');
  $(this).parents().siblings().find('.menu-tendina').addClass('none');
 }
);

$(document).on('click','.delete',function() {
  $(this).parents('.send').remove();
  $(this).parents('.received').remove();
 }
);

function scrollMessage() {
  var altezzaBox = $('.chat').height();
  $('.sfondo').scrollTop(altezzaBox);
}




// 2 metodo milestone2
// scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// $(document).ready(
//   function(){
//     $('.icon-search').click(
//       function search(){
//         var textSearch = $('.search-contatti').val();
//
//           var i = 0;
//           while (i < $('.nome').length) {
//            var nomeUtente = $('.lista-contatti .nome ').eq(i).text();
//
//            var trovato = $('.lista-contatti li').eq(i);
//            if (nomeUtente.includes(textSearch)) {
//              trovato.show();
//              console.log('il nome esiste');
//            } else {
//              trovato.hide();
//              console.log('il nome non esiste');
//            }
//            i++;
//            console.log(nomeUtente);
//           }
//
//
//       }
//     )
//
//   }
// );
