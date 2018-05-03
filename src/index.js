$(document).ready(function() {

    var localstorage = window.localStorage;
    var currentSection = localstorage.getItem('currentSection');

    var radio_1 = $('#radio-1');
    var radio_2 = $('#radio-2');
    var radio_3 = $('#radio-3');
    var radio_4 = $('#radio-4');

    radio_1.prop('checked', false);
    $('#radio-' + currentSection).prop('checked', true);

    window.addEventListener('scroll', function(e) {
        var element = $(":focus")
        last_known_scroll_position = window.scrollY;
    });
    radio_1.click(function() {
        radio_1.prop('checked', true);
        radio_2.prop('checked', false);
        radio_3.prop('checked', false);
        radio_4.prop('checked', false);
        localStorage.setItem('currentSection', '1');
        document.querySelector('#section-1').scrollIntoView({
            behavior: 'smooth'
        });
    });
    radio_2.click(function() {
        radio_1.prop('checked', false);
        radio_2.prop('checked', true);
        radio_3.prop('checked', false);
        radio_4.prop('checked', false);
        localStorage.setItem('currentSection', '2');
        document.querySelector('#section-2').scrollIntoView({
            behavior: 'smooth'
        });
    });
    radio_3.click(function() {
        radio_1.prop('checked', false);
        radio_2.prop('checked', false);
        radio_3.prop('checked', true);
        radio_4.prop('checked', false);
        localStorage.setItem('currentSection', '3');
        document.querySelector('#section-3').scrollIntoView({
            behavior: 'smooth'
        });
    });
    radio_4.click(function() {
        radio_1.prop('checked', false);
        radio_2.prop('checked', false);
        radio_3.prop('checked', false);
        radio_4.prop('checked', true);
        localStorage.setItem('currentSection', '4');
        document.querySelector('#section-4').scrollIntoView({
            behavior: 'smooth'
        });
    });


});