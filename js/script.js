$(document).ready(
  function () {
    $('.submit').click(
      function (){
        var message = $('.testo-messaggio').clone().addClass('msg-green');
        $('.sfondo').append(message);
        var spunta = $('.spunta').clone().show();
        $('.sfondo').append(spunta);
      }
    );
    $('input').keydown(function(){ console.log(event.which);
      if (event.which == 13) {
        var message = $('.testo-messaggio').clone().addClass('msg-green');
        $('.sfondo').append(message);
      }
    }
   );
  }
);
