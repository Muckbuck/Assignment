$(document).ready(function() {

    $.fn.scrollView = function() {
        return this.each(function() {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        });
    }

    var radio_1 = $('#radio-1');
    var radio_2 = $('#radio-2');
    var radio_3 = $('#radio-3');

    console.log($('#section-1').position().top);
    console.log($('#section-1').position().bott);

    window.addEventListener('scroll', function(e) {
        var element = $(":focus")
        last_known_scroll_position = window.scrollY;
    });
    radio_1.click(function() {
        radio_1.prop('checked', true);
        radio_2.prop('checked', false);
        radio_3.prop('checked', false);
        var y = $('#section-1').position().top;
        document.querySelector('#section-1').scrollIntoView({
            behavior: 'smooth'
        });
    });
    radio_2.click(function() {
        radio_1.prop('checked', false);
        radio_2.prop('checked', true);
        radio_3.prop('checked', false);
        var y = $('#section-2').position().top;
        document.querySelector('#section-2').scrollIntoView({
            behavior: 'smooth'
        });
    });
    radio_3.click(function() {
        radio_1.prop('checked', false);
        radio_2.prop('checked', false);
        radio_3.prop('checked', true);
        var y = $('#section-3').position().top;
        document.querySelector('#section-3').scrollIntoView({
            behavior: 'smooth'
        });
    });


});