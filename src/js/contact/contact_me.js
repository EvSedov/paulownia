/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
import $ from 'jquery'

$(function () {
    $('input,textarea').jqBootstrapValidation({
        preventSubmit: true,
        // submitError: function ($form, event, errors) {
        // something to have when submit produces an error ?
        // Not decided if I need it yet
        // },
        submitSuccess: function (_, event) {
            event.preventDefault() // prevent default submit behaviour
            // get values from FORM
            var name = $('input#name').val()
            var phone = $('input#phone').val()
            var email = $('input#email').val()
            var message = $('textarea#message').val()
            var firstName = name // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ')
            }
            $.ajax({
                url: 'send.php',
                type: 'POST',
                data: { name, phone, email, message },
                cache: false,
                success: function () {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>")
                    $('#success > .alert-success')
                        .html(
                            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;",
                        )
                        .append('</button>')
                    $('#success > .alert-success').append(
                        '<strong>Ваше сообщение было отправлено. </strong>',
                    )
                    $('#success > .alert-success').append('</div>')

                    //clear all fields
                    $('#contactForm').trigger('reset')
                },
                error: function () {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>")
                    $('#success > .alert-danger')
                        .html(
                            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;",
                        )
                        .append('</button>')
                    $('#success > .alert-danger').append(
                        '<strong>Извините ' +
                            firstName +
                            " похоже, что мой почтовый сервер не отвечает...</strong> Не могли бы вы, пожалуйста, написать мне напрямую по адресу <a href='mailto:info@karbon-biotech.com'>info@karbon-biotech.com</a>? Приношу извинения за причиненные неудобства!",
                    )
                    $('#success > .alert-danger').append('</div>')
                    //clear all fields
                    $('#contactForm').trigger('reset')
                },
            })
        },
        filter: function () {
            return $(this).is(':visible')
        },
    })

    $('a[data-toggle="tab"]').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
})

/*When clicking on Full hide fail/success boxes */
$('#name').on('focus', function () {
    $('#success').html('')
})
