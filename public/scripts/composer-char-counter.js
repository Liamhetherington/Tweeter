$(document).ready(function() {
  const textArea = document.querySelector('textarea[name=text]');

  $(textArea).on('keyup', function () {
    const textLength = $(this).val().length; //"this" === 'textarea'
    const countRemaining = 140 - textLength;
    const counter = $(this).siblings('.counter').text(countRemaining);
    if (textLength > 140) {
      $(counter).css('color', 'red');
    } else {
      $(counter).css('color', 'lavender');
    }
  })
});