
window.onload = (async $ => {"use strict";
    // enable bootstrap tooltips everywhere:
    // src: https://getbootstrap.com/docs/5.0/components/tooltips/
    const tooltip_query = '[data-bs-toggle="tooltip"]';
    const tooltip_options = {delay: 150, trigger: 'hover', container: 'body'};
    for (const element of document.querySelectorAll(tooltip_query)) {
        (new bootstrap.Tooltip(element, tooltip_options));
    }

    
    (async function MainLoop(){
        // do stuff on loop:

        // run again on next possible frame:
        requestAnimationFrame(MainLoop);
    })();

});

