$(document).ready(function() {
    $('.registration-form').submit(function(event) {
      event.preventDefault();
      var formData = {
        name: $('input[name=name]').val(),
        phone: $('input[name=phone]').val(),
        email: $('input[name=email]').val()
      };
      console.log(formData);
    });
  });
  