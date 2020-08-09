$(document).ready(() => {
  $('#prompt')
    .dialog({
      autoOpen: false,
      modal: true,
      buttons: [
        {
          text: 'Accept',
          click: () => {
            $('#prompt').dialog('close');
            let message = $('#prompt').find('.prompt-input');
            console.log(message.val());
            window.alert(message.val());
            message.val('');
          },
        },
        {
          text: 'Cancel',
          click: () => {
            $('#prompt').dialog('close');
            $('#prompt').find('.prompt-input').val('');
          },
        },
      ],
    })
    // asa am reusit sa fac event cu "enter". am gasit ca which e recomandat in loc de code, https://css-tricks.com/snippets/javascript/javascript-keycodes/
    // ar fi fost vreun mod in care sa leg eventul de buton cand declar butonul de 'Accept'?
    // validarea din IF pare insuficienta. ce imi scapa?
    .keypress((key) => {
      if (key.which === 13) {
        $('#prompt').dialog('close');
        let message = $('#prompt').find('.prompt-input');
        window.alert(message.val());
        message.val('');
      }
    });

  // am incercat sa pun escape sa stearga continutul inputului. it did not work. e posibil sa fie ceva din codul de dialog care are deja event pe escape?

  // .keypress((key) => {
  //   if (key.which === 27) {
  //     $('#prompt').find('.prompt-input').val('');
  //     $('#prompt').dialog('close');
  //   }
  // });

  $('#confirm').dialog({
    autoOpen: false,
    modal: true,
    buttons: [
      {
        text: 'Confirm',
        click: () => {
          $('#confirm').dialog('close');
          console.log(true);
        },
      },
      {
        text: 'Cancel',
        click: () => {
          $('#confirm').dialog('close');
          console.log(false);
          return false;
        },
      },
    ],
    position: { my: 'top', at: 'top', of: window },
  });

  window.prompt = (msg) => {
    $('#prompt')
      .find('.prompt-text')
      .text(msg)
      .end()
      .dialog('option', 'title', 'Window Prompt')
      .dialog('open');
  };

  // am luat si codul de la clasa, am ramas cu impresia ca inputul din prompt se afiseaza intr-un alert. upsy!
  $('#alert').dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Close: () => {
        $('#alert').dialog('close');
      },
    },
    position: { my: 'top', at: 'top', of: window },
    height: 'auto',
  });

  window.alert = (msg) => {
    $('#alert')
      .find('.alert-text')
      .text(msg)
      .end()
      .dialog('option', 'title', 'Alert message!')
      .dialog('open');
  };

  window.confirm = (text) => {
    $('#confirm')
      .find('.confirm-text')
      .text(text)
      .end()
      .dialog('option', 'title', 'Confirm Dialog')
      .dialog('open');
  };

  $('#show-prompt').on('click', () => {
    prompt('Your input goes in the field below!');
  });

  $('#show-confirm').on('click', () => {
    confirm('Do you want to confirm?');
  });
});
