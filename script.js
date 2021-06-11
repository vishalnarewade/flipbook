$(window).on('load', function() {
	$('.loading, .flip-book-wrapper').toggle();
});

var items = [{
	front: 'images/bangalore.jpg',
	back: 'images/bangalore.jpg'
}, {
	front: 'images/goa.jpg',
	back: 'images/goa.jpg'
}, {
	front: 'images/delhi.jpg',
	back: 'images/delhi.jpg'
}, {
	front: 'images/chennai.jpg',
	back: 'images/chennai.jpg'
}, {
	front: 'images/jaipur.jpg',
	back: 'images/jaipur.jpg'
}];

var liLength = items.length;
items.forEach((x, i) => {
	var content = '<li data-id="'+ (i + 1) + '" style="z-index: ' + ( liLength - i ) + '"><figure><img src="' + x.front + '" alt="card-front-' + (i + 1) + '" class="front"><img src="' + x.back + '" alt="card-back-' + (i + 1) + '" class="back"></figure></li>';

	$('.flip-book-wrapper').append(content);
});

var list = $('li');
var prevButton = $('.prev');
var nextButton = $('.next');
var active = 1;
prevButton.bind('click', togglePage);
nextButton.bind('click', togglePage);

// prevButton.hover(function() {
// 	if ((this.classList.contains('prev') && active === 1)) return;

// 	$('.flip-book-wrapper').find('li[data-id="' + (active - 1) + '"]').addClass('prev-fold');
// }, function () {
// 	if ((this.classList.contains('prev') && active === 1)) return;

// 	$('.flip-book-wrapper').find('li[data-id="' + (active - 1) + '"]').removeClass('prev-fold');
// })

// nextButton.hover(function() {
// 	if ((this.classList.contains('next') && active === liLength + 1)) return;

// 	$('.flip-book-wrapper').find('li[data-id="' + active + '"]').addClass('next-fold');
// }, function () {
// 	if ((this.classList.contains('next') && active === liLength + 1)) return;
	
// 	$('.flip-book-wrapper').find('li[data-id="' + active + '"]').removeClass('next-fold');
// })

function togglePage() {
	if ((this.classList.contains('prev') && active === 1) || (this.classList.contains('next') && active === liLength + 1)) return;

	var flip = document.querySelectorAll('.flip');

	if (this.classList.contains('prev')) {
		var previous = active - 1;
		if (active === (liLength + 1)) {
			$('.flip-book-wrapper').find('li[data-id="' + previous + '"]').removeClass('flip');

			setTimeout(function() {
				$('.flip-book-wrapper').find('li[data-id="' + previous + '"]').css('z-index', (liLength - flip.length + 1));
				active--;
			}, 200);
		} else {
			$('.flip-book-wrapper').find('li[data-id="' + previous + '"]').css('z-index', (liLength - flip.length + 1));

			setTimeout(function() {
				$('.flip-book-wrapper').find('li[data-id="' + previous + '"]').removeClass('flip');
				active--;
			}, 200);
		}
	} else {
		if (active === liLength) {
			$('.flip-book-wrapper').find('li[data-id="' + active + '"]').css('z-index', flip.length);

			setTimeout(function() {
				$('.flip-book-wrapper').find('li[data-id="' + active + '"]').addClass('	flip');	
				active++;
			}, 300);
		} else {
			$('.flip-book-wrapper').find('li[data-id="' + active + '"]').addClass('	flip');
		
			setTimeout(function() {
				$('.flip-book-wrapper').find('li[data-id="' + active + '"]').css('z-index', flip.length);
				active++;
			}, 300);
		}
	}
}