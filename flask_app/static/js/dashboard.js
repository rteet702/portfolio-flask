$(document).ready(function() {
    console.log('Script loaded...')

    // consts
    const TOP_BAR = $(".topbar")
    const SIDE_NAV = $(".sidenav")
    const LOGIN = $('#login')
    const BLACKOUT = $('.blackout')
    const CLOSE = $('#closeside')
    const TTRAN = $('.text-transition')

    BLACKOUT.fadeOut(0)

    // // check current scroll, hide topbar past a point.
    // $(window).scroll(function() {
    //     $('.fade-wrapper *').each(function() {
    //         let dist = ($( this ).offset().top - ($( window ).scrollTop() + 100)) / $( window ).height()

    //         $( this ).css('opacity', 1 + dist * 2)
    //     })
    // })

    // pop out sidenav
    LOGIN.click(function(e) {
        e.preventDefault()

        BLACKOUT.fadeIn()
        SIDE_NAV.width( 600 )

        disableScroll()
    })

    // close sidenav
    CLOSE.click(function() {
        BLACKOUT.fadeOut()
        SIDE_NAV.width( 0 )

        enableScroll()
    })
})

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}