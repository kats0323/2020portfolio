
jQuery(function ($) {
    test = document.querySelector(".all-backgr")
    $('.about-container').waypoint(function (direction) {
        if (direction === 'down') {　//scroll down
            $('.all-bg').removeClass('bg-1');
            $('.all-bg').addClass('bg-2');
        }
        else { //scroll up
            $('.all-bg').addClass('bg-1');
            $('.all-bg').removeClass('bg-2');
        }
    }, { offset: '30%' });

    $('.hobbies-container').waypoint(function (direction) {
        if (direction === 'down') {　//scroll down
            $('.all-bg').removeClass('bg-2');
            $('.all-bg').addClass('bg-3');
        }
        else { //scroll up
            $('.all-bg').addClass('bg-2');
            $('.all-bg').removeClass('bg-3');
        }
    }, { offset: '30%' });

    $('.projects-container').waypoint(function (direction) {
        if (direction === 'down') {　//scroll down
            $('.all-bg').removeClass('bg-3');
            $('.all-bg').addClass('bg-4');
        }
        else { //scroll up
            $('.all-bg').addClass('bg-3');
            $('.all-bg').removeClass('bg-4');
        }
    }, { offset: '40%' });

});

let doc = jQuery(document);
doc.ready(function () {
    var typed = new Typed('.mytext', {
        strings: ['Katsuhiro Shimizu', 'Web Developer'],
        smartBackspace: true, // Default value
        loop: true,
        backDelay: 3000
    });
});
