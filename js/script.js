$(document).ready(
  function () {
    $('.submit').click(
      function (){
        var message = $('.testo-messaggio').clone();
        $('.sfondo').append(message).addClass('.msg-green');
      }
    );
    $('input').keydown(function(){ console.log(event.which);
      if (event.which == 13) {
        var message = $('.testo-messaggio').clone();
        $('.sfondo').append(message);
      }
    }
   );
  }
);
