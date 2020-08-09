$(document).ready(() => {
  $('#dialog').dialog({
    autoOpen: false,
    show: 300,
    hide: 300,
  });

  window.alert = (msg) => {
    $('#dialog')
      .find('.dialog-text')
      .text(msg)
      .end()
      .dialog('option', 'title', msg)
      .dialog('open');

    // return $('#dialog').find('.input-class').val();
  };

  $('#dialog-open').on('click', () => {
    alert('Helo World');
  });

  $('#dialog-close').on('click', () => {
    $('#dialog').dialog('close');
  });
});
