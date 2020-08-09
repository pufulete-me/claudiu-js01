$(document).ready(() => {
  $('#main-dialog').dialog({
    autoOpen: false,
    modal: true,
    title: 'Dialog Widget Title',
    buttons: [
      {
        text: 'Accept',
        click: () => {
          $('#main-dialog').dialog('close');
          setTimeout(() => {
            alert('You have just accepted to sell your house! Thanks!');
          }, 1);
        },
      },
      {
        text: 'Close',
        click: () => {
          $('#confirmation-dialog').dialog('open');
        },
      },
    ],
  });

  $('.show-dialog').on('click', () => {
    $('#main-dialog').dialog('open');
  });

  $('#confirmation-dialog').dialog({
    autoOpen: false,
    modal: true,
    buttons: [
      {
        text: 'Confirm',
        click: () => {
          $('#main-dialog').dialog('close');
          $('#confirmation-dialog').dialog('close');
        },
      },
      {
        text: 'Cancel',
        click: () => {
          $('#confirmation-dialog').dialog('close');
        },
      },
    ],
  });
});
