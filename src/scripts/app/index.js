$(document).ready(function() {

    (() => {
        const $window = $(window);
        const $header = $('header');

        $window.on('scroll', headerHandler);

        function headerHandler() {
            if($window.scrollTop() > 10) $header.addClass('tm-navbar-scrolled');
            else $header.removeClass('tm-navbar-scrolled');
        }
    })();

    (() => {
        const $window = $(window);
        const $advContainer = $('.tm-advertising .uk-container');


        $window.on('scroll', scrollHandler);

        function scrollHandler() {

            $advContainer.each(function () {
                const $headingElement = $(this).find('h2');
                if($window.scrollTop() > $(this).offset().top - 500) $headingElement.addClass('animated');
                //else if($window.scrollTop() < $(this).offset().top + $(this).height()) $headingElement.removeClass('animated');
            });
        }
    })()

});