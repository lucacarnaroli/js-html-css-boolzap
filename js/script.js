$(document).ready(
  function () {
    $('.submit').click(
      function (){
        var message = $('.send').clone();
        $('.sfondo').append(message);

        // setTimeout(gian,2000);
        // function (){
        //   var messaggioPc = 'ciao';
        //   console.log(messaggioPc);
        //   $(messaggioPc).clone();
        //   $('.sfondo').append(messaggioPc);

        }
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
