$(document).ready(function() {
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    var radio_1 = $('#radio-1');
    var radio_2 = $('#radio-2');
    var radio_3 = $('#radio-3');

    window.addEventListener('scroll', function(e) {
        var element = $(":focus")
        last_known_scroll_position = window.scrollY;
    });
    radio_1.click(function() {
        radio_1.prop('checked', true);
        radio_2.prop('checked', false);
        radio_3.prop('checked', false);
        document.querySelector('#section-1').scrollIntoView({
            behavior: 'smooth'
        });
    });
    radio_1.hover(function() {

    });
    radio_2.click(function() {
        radio_1.prop('checked', false);
        radio_2.prop('checked', true);
        radio_3.prop('checked', false);
        document.querySelector('#section-2').scrollIntoView({
            behavior: 'smooth'
        });
    });
    radio_3.click(function() {
        radio_1.prop('checked', false);
        radio_2.prop('checked', false);
        radio_3.prop('checked', true);
        document.querySelector('#section-3').scrollIntoView({
            behavior: 'smooth'
        });
    });


});