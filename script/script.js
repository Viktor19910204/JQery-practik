$(document).ready(function() {
    $('li:eq(7)').on('click', function() {
        $('.overlay').animate(
            {
                opacity: 'toggle'
            }
        )

        $('.modal').animate(
            {
                height: 'toggle'
            }
        )
    })

    $('.main_btna').on('click', function() {
        $('.overlay').animate(
            {
                opacity: 'toggle'
            }
        )

        $('.modal').animate(
            {
                height: 'toggle'
            }
        )
    })

    $('.main_btn').on('click', function() {
        $('.overlay').animate(
            {
                opacity: 'toggle'
            }
        )

        $('.modal').animate(
            {
                height: 'toggle'
            }
        )
    })

    $('.close').on('click', function() {
        $('.overlay').animate(
            {
                opacity: 'toggle'
            }
        )

        $('.modal').animate(
            {
                height: 'toggle'
            }
        )
    })
})