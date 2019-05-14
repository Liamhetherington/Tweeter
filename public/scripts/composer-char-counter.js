$(document).ready(function() {
  const textArea = document.querySelector('textarea[name=text]');

  $(textArea).on('keypress', function () {
  const textLength = $(this).val().length; //"this" === 'textarea'
  console.log(textLength)
  const countRemaining = 140 - textLength;
  const counter = $(this).siblings('.counter');
  console.log("this is the counter: " + counter)
  $(counter).html(countRemaining);
  if (countRemaining < 0) {
    $(counter).css('color', 'red');
  } else {
    $(counter).css('color', 'brown');
  }

  })

});
