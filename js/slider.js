(function($) {

	$.fn.slider = function(options) {

		var settings = $.extend({
			slider: '.slider-js',
			sliderBullets: false,
			slideItems: '.slide-js',
			slideLeft: 'slider-left-js',
			slideRight: 'slider-right-js',
		}, options);

		var $sliderContainer = this,
			$slider = $(settings.slider),
			$slideItems = $(settings.slideItems),
			$sliderBullets = settings.sliderBullets ? $(settings.sliderBullets) : null,
			$slideLeft = settings.slideLeft ? $('.' + settings.slideLeft) : null,
			$slideRight = settings.slideRight ? $('.' + settings.slideRight) : null,
			timer,
			numberSlides = $slideItems.length;

		function resetTimer() {
			clearTimeout(timer);
			timer = setTimeout(function() {
				slideRight();
			}, 5000);
		}

		function slideRight() {
			var currentSlide = $slideItems.data('current-slide');
			if (currentSlide < numberSlides - 1) {
				slideTo(currentSlide + 1);
			} else {
				resetSlider();
			}
			resetTimer();
		}

		function slideLeft() {
			var currentSlide = $slideItems.data('current-slide');
			if (currentSlide !== 0) {
				slideTo(currentSlide - 1);
			} else {
				slideTo(numberSlides - 1);
			}
			resetTimer();
		}

		function slideTo(numberToSlide) {
			$slideItems.css({
				"-webkit-transform": "translate(-" + 100 * numberToSlide + "%, 0)"
			});
			$slideItems.data('current-slide', numberToSlide);
			updateBullet(numberToSlide);
		}

		function resetSlider() {
			$slideItems.css({
				"-webkit-transform": "translate(0, 0)"
			});
			$slideItems.data('current-slide', 0);
			updateBullet(0);
		}

		function updateBullet(bulletNumber) {
			if (settings.sliderBullets !== false) {
				$sliderBullets.find('.active').removeClass('active');
				$sliderBullets.find('div').eq(bulletNumber).addClass('active');
			}
		}

		function setArrows() {
			if (settings.slideLeft && settings.slideRight) {
				$slideLeft.css({
					position: 'absolute',
					left: 0
				});
				$slideRight.css({
					position: 'absolute',
					right: 100 / numberSlides * (numberSlides - 1) + '%'
				});
			}
		}

		function initialiseSlides() {
			$sliderContainer.css({
				width: '100%',
				overflow: 'hidden'
			});
			$slider.css({
				width: 100 * numberSlides + '%'
			});
			$slideItems.css({
				transition: '300ms'
			});
			$slideItems.data('current-slide', 0);

			for (var i = 0; i < numberSlides; i++) {
				$slideItems.eq(i).css({
					float: 'left',
					width: 100 / numberSlides + '%'
				});
				if (settings.sliderBullets !== false) {
					$sliderBullets.append("<div data-slide=\"" + i + "\"></div>");
				}
			}
			updateBullet(0);
		}

		$sliderContainer.on('click', "." + settings.slideLeft + "," + "." + settings.slideRight, function() {
			if ($(this).hasClass(settings.slideLeft)) {
				slideLeft();
			} else {
				slideRight();
			}
		});

		if (settings.sliderBullets !== false) {
			$sliderBullets.on('click', 'div', function() {
				slideTo($(this).data('slide'));
				updateBullet($(this).data('slide'));
				resetTimer();
			});
		}

		setArrows();

		initialiseSlides();

		timer = setTimeout(function() {
			slideRight();
		}, 5000);

		return this;

	}

})(jQuery);