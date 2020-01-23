$(document).ready(
  function () {
    $('.submit').click(
      function (){
        var message = $('.testo-messaggio').clone();
        $('.sfondo').append(message);
      }
    );
  }
);
