import Parallax from 'parallax-js/dist/parallax.min.js';

$(()=>{

    (() => {
        const $parallaxScenes = $('.js-parallax');

        $parallaxScenes.each(function () {
            const parallaxInstance = new Parallax(this);
        });
    })();
});