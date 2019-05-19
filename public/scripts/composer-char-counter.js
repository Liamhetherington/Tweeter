$(document).ready(function() {
  const textArea = document.querySelector('textarea[name=text]');

  $(textArea).on('keydown', function () {
  const textLength = $(this).val().length; //"this" === 'textarea'
  console.log(textLength)
  const countRemaining = 139 - textLength;
  const counter = $(this).siblings('.counter');
  console.log("this is the counter: " + counter)
  $(counter).html(countRemaining);
  if (countRemaining < 0) {
    $(counter).css('color', 'red');
  } else {
    $(counter).css();
  }
  })

});
