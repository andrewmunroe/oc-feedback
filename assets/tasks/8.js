$(document).ready(function () {

    // Set links
    $('a.tag, a.switch, .col-sm-auto a.nav-link').attr('href', '/9');

    // Listen for changes to search form and update variable
    var search = 'Blank search';

    $('#search-box').on('keyup change', function () {
        search = this.value;
    });

    // Prevent the form from submitting to force users to click submit button
    $('.form-inline').submit(function(e){
        e.preventDefault();
    });

    // Listen for clicks on any element that leads to next task
    $('[href$="9"]').click(function (event) {

        // Use event.preventDefault(); for analytics debugging in development

        if ($(this).is('#search-submit')) {
            // If the user searched, fire an event with the value of their search as the event label
            ga('send', 'event', 'Task #8: Apply to OC on the Future Students (Video) page', 'Searched', search);
        }
        else {
            // Otherwise they clicked, so get the id of the nearest tag for use as event label
            var label = $(this).closest('.tag').attr('id');
            // then fire the analytics event
            ga('send', 'event', 'Task #8: Apply to OC on the Future Students (Video) page', 'Clicked', label);

        }

        // Feature detects Navigation Timing API support.
        if (window.performance) {
            // if the feature is supported, send the time the task took
            // note: analytics will only process ~10% of these, per developers.google.com/analytics/devguides/collection/analyticsjs/user-timings
            var timeSincePageLoad = Math.round(performance.now());
            ga('send', 'timing', 'Task #8: Apply to OC on the Future Students (Video) page', 'Clicked', timeSincePageLoad);
        }
    })

});