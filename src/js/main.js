import './lib/lib'

// $('div').hide()
// $('div').show()
// $('.active').toggle()

$('button').on('click', function () {
    $(this).toggleClass('active');
})
