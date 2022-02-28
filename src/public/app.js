








window.onload = (async $ => {"use strict";
    /*: ======================================================================
    * ########################################################################
    * 
    * ...application initialize
    * 
    * ########################################################################
    * ========================================================================
    */ 



    // const search_bar_div = document.querySelector('#search-bar-div');
    // const nav_search_div = document.querySelector('#nav-search-div');
    // const rankord_search = document.querySelectorAll('.rankord-search');

    // async function updateSearchBarVisibility() {
    //     // console.log('window.scrollY:', window.scrollY)
    //     if (window.scrollY >= 432) { 
    //         nav_search_div.classList.remove('d-none');

    //         search_bar_div.classList.add('fadeout');
    //         if (search_bar_div.classList.contains('fadein')) {
    //             search_bar_div.classList.remove('fadein');
    //         }
    //         nav_search_div.classList.add('fadein');
    //         if (nav_search_div.classList.contains('fadeout')) {
    //             nav_search_div.classList.remove('fadeout');
    //         }
    //     } else {
    //         if (search_bar_div.classList.contains('fadeout')) {
    //             search_bar_div.classList.remove('fadeout');
    //             search_bar_div.classList.add('fadein');
    //         }
    //         if (nav_search_div.classList.contains('fadein')) {
    //             nav_search_div.classList.remove('fadein');
    //             nav_search_div.classList.add('fadeout');
    //         }
    //     }
    // }
    
    // // new bootstrap.Dropdown(document.getElementById('logged-user'), {
    // //     popperConfig: function () {
    // //         return {placement: 'bottom'}
    // //     }
    // // });

    // // console.log(rankord_search)
    // for (const search_bar of rankord_search) {
    //     search_bar.addEventListener('keyup', event => {
    //         if (/enter/i.test(event.key)) {
    //             // todo do search query: 
    //         } else {
    //             updateSearchbars(search_bar.value);
    //         }
    //     })
    // }

    // async function updateSearchbars(value) {
    //     for (const search_bar of rankord_search) {
    //         search_bar.value = value;
    //     }
    // }

    // await updateSearchBarVisibility();
    // window.addEventListener("scroll", async () => {
    //     await updateSearchBarVisibility();
    // });


    // const {getElement, getElementsByClass, wait} = DRM.utils;

    // function openCreatorURL() {
    //     deap.openExternal("https://twitter.com/DekitaRPG");
    // }
    // for (const creator_url_btn of getElementsByClass('creator-url-btn')) {
    //     creator_url_btn.onclick = openCreatorURL;
    // }

    // const navbar = document.getElementById('appview-app-navbar');
    // navbar.classList.remove('d-none');

    // for (const mod of modules_list) {
    //     app_modules[mod] = require(`./js/${mod}`);
    //     app_modules[mod].setup();
    // }

    // await wait(1000);

    // enable bootstrap tooltips everywhere:
    // src: https://getbootstrap.com/docs/5.0/components/tooltips/
    const tooltip_query = '[data-bs-toggle="tooltip"]';
    const tooltip_options = {delay: 150, trigger: 'hover', container: 'body'};
    for (const element of document.querySelectorAll(tooltip_query)) {
        (new bootstrap.Tooltip(element, tooltip_options));
    }

    /*: ======================================================================
    * ########################################################################
    * 
    * ...main app loop
    * 
    * ########################################################################
    * ========================================================================
    */ 
    // auto called function:..
    (async function MainLoop(){
        // for (const mod of modules_list) {
        //     app_modules[mod].update();
        // }
        requestAnimationFrame(MainLoop);
    })();

});

