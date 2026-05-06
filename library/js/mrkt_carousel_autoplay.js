(function($) {
    'use strict';

    // Ensure we wait for the page to load
    $(document).ready(function() {
        var autoplayInterval = setInterval(function() {
            var $nextBtn = $('.owl-next');
            
            if ($nextBtn.length > 0) {
                // If the next button is disabled, we've reached the end
                if ($nextBtn.hasClass('disabled')) {
                    var $prevBtn = $('.owl-prev');
                    // Fast-rewind to the first item
                    var resetLoop = setInterval(function() {
                        if (!$prevBtn.hasClass('disabled')) {
                            $prevBtn.click();
                        } else {
                            clearInterval(resetLoop);
                        }
                    }, 50); // Fast clicks to reset
                } else {
                    // Move to the next item
                    $nextBtn.click();
                }
            }
        }, 9000); // 9-second interval

        console.log("%c Venue Carousel: Verified Autoplay Active.", "color: green; font-weight: bold;");
    });
})(jQuery);