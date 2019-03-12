$(document).ready(function(){
    if (window.performance) {
        var timeSincePageLoad = Math.round(performance.now());
        window.alert('It works! (This prompt took ' + timeSincePageLoad + ' milliseconds to appear.)');
    }
})
