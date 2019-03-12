$(document).ready(function () {

    // Prevent the form from submitting to force users to click submit button
    $('.form-inline').submit(function(e){
        e.preventDefault();
    });

    // Listen for clicks on any element that leads to next task
    $('[href$="11"]').click(function (event) {

        // Use event.preventDefault(); for analytics debugging in development

        // Get the id of the nearest tag for use as event label
        var label = $(this).attr('id');
        // then fire the analytics event
        ga('send', 'event', 'Task #10: Choose a future students layout', 'Clicked', label);

    });

});