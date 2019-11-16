//LazyLoad
document.addEventListener("DOMContentLoaded", function() {

	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

	if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {

		let lazyImageObserver = new IntersectionObserver(function(entries, observer) {

			entries.forEach(function(entry) {

				if (entry.isIntersecting) {

					let lazyImage = entry.target;

					lazyImage.src = lazyImage.dataset.src;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function(lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	}
});

//lazyImages.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAEALAAAAAABAAEAAAICTAEAOw==');
document.body.onload = function() {

	//Images
	// var images = document.querySelectorAll('.lazy');
		
	// console.log(images);
	
	// for (var i = 0; i < images.length; i++) {
	// 	images[i].setAttribute('background', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAEALAAAAAABAAEAAAICTAEAOw==');

	// 	images[i].setAttribute('width', images[i].naturalWidth);
	// 	images[i].setAttribute('height', images[i].naturalHeight);

	// 	//console.log(images[i].clientWidth);
	// 	//console.log(images[i].clientHeight);
	// }

	setTimeout(function() {

		//Preloader
		var preloader = document.getElementById('preloader');
			preloader.style.display = 'none';

		if(document.readyState == 'complete') {
			wow = new WOW({
				offset: 120,
				mobile: false
			})
			wow.init();
		}

		//Animate WOW
		
		

	}, 600)
}

//Jquery
$(document).ready(function(){

	var burger = $('#burger'),
		burger_item = $('#burger_item'),
		nav = $('#nav'),
		header_left = $('#header_left'),
		header_right = $('#header_right');


	//Gamburger menu
	burger.on('click', function(event) {
		event.preventDefault();

		if (!burger_item.hasClass('open')) {
			burger_item.addClass('open');

			nav.addClass('active');
			header_left.addClass('active');
			header_right.addClass('active');
		} else {
			burger_item.removeClass('open');

			nav.removeClass('active');
			header_left.removeClass('active');
			header_right.removeClass('active');
		}
	});
	$(document).on('click', function(e) {

		if (burger_item.hasClass('open')) {

			if (!nav.is(e.target) && nav.has(e.target).length === 0 &&
				!burger.is(e.target) && burger.has(e.target).length === 0 &&
				!header_left.is(e.target) && header_left.has(e.target).length === 0 &&
				!header_right.is(e.target) && header_right.has(e.target).length === 0) {

				burger_item.removeClass('open');

				nav.removeClass('active');
				header_left.removeClass('active');
				header_right.removeClass('active');	
			}
		}
	});


	// Modals
	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]");

	modalCall.on("click", function(event){
		event.preventDefault();

		let $this = $(this);
		let modalId = $this.data('modal');

		$(modalId).addClass('show');
		$('body').addClass('no_scroll');
	});
	
	modalClose.on("click", function(event){
		event.preventDefault();

		let $this = $(this);
		let modalParent = $this.parents('.modal__login');

		modalParent.removeClass('show');
		$('body').removeClass('no_scroll');
	});
			
	$(".modal__login").on("click", function(event){
		$(this).removeClass('show');
		$('body').removeClass('no_scroll');
	});
	$(".modal__dialog").on("click", function(event){
		event.stopPropagation();
	});


	//Modal tabs
	$(".modal__tab_content").not(":first").hide();
	$(".modal__title").click(function() {
		event.preventDefault();

		$(".modal__title").removeClass("active").eq($(this).index()).addClass("active");
		$(".modal__tab_content").hide().eq($(this).index()).fadeIn(150);

	}).eq(0).addClass("active");


	// //Images
	// var images = $('img.lazy');
	// 	images.attr('background', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAEALAAAAAABAAEAAAICTAEAOw==');
	// console.log(images.parent().parent());
	
	// for (var i = 0; i < images.length; i++) {
	// 	images.attr('width', images[i].naturalWidth);
	// 	images.attr('height', images[i].naturalHeight);

	// 	//console.log(images[i].clientWidth);
	// 	//console.log(images[i].clientHeight);
	// }
});