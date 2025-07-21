/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */

(function ($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */
	$(window).load(function () {

		// will first fade out the loading animation 
		$("#loader").fadeOut("slow", function () {

			// will fade out the whole DIV that covers the website.
			$("#preloader").delay(300).fadeOut("slow");

		});

	})


	/*---------------------------------------------------- */
	/* FitText Settings
	------------------------------------------------------ */
	setTimeout(function () {

		$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

	}, 100);


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */
	$("#owl-slider").owlCarousel({
		navigation: false,
		pagination: true,
		itemsCustom: [
			[0, 1],
			[700, 2],
			[960, 3]
		],
		navigationText: false
	});

	$("#owl-slider-skills").owlCarousel({
		navigation: false,
		pagination: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true // Mostra um item de cada vez
	});

	$("#owl-slider-languages").owlCarousel({
		navigation: false,
		pagination: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true // Mostra um item de cada vez
	});
	$("#owl-slider-work").owlCarousel({
		navigation: false,
		pagination: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true, // Mostra um item de cada vez
	});
	$("#owl-slider-education").owlCarousel({
		navigation: false,
		pagination: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true // Mostra um item de cada vez
	});
	$("#owl-slider-certifications").owlCarousel({
		navigation: false,
		pagination: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true // Mostra um item de cada vez
	});

	$(document).ready(function () {

		$("#folio-wrapper").owlCarousel({
			items: 2,         // Mostrar 2 itens em telas maiores
			loop: true,       // Navegação infinita
			margin: 30,       // Espaço entre os itens
			nav: true,        // Mostrar setas de navegação
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], // Ícones para as setas
			responsive: {
				0: {
					items: 1    // Em telas pequenas (mobile), mostrar 1 item
				},
				768: {
					items: 2    // Em telas maiores (tablet/desktop), mostrar 2 itens
				}
			}
		});

	});
	
	/*----------------------------------------------------*/
	/*	Portfolio Carousel
	/*------------------------------------------------------ */
	$("#portfolio-slider").owlCarousel({
		items: 2,
		itemsDesktop: [1000, 2],
		itemsDesktopSmall: [900, 2],
		itemsTablet: [768, 1],
		itemsMobile: [480, 1],

		// Opções para as setas na versão do seu template
		navigation: true,
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});



	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
	$('.item-wrap a').magnificPopup({

		type: 'inline',
		fixedContentPos: false,
		removalDelay: 300,
		showCloseBtn: false,
		mainClass: 'mfp-fade'

	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});


	/*-----------------------------------------------------*/
	/* Navigation Menu
------------------------------------------------------ */
	var toggleButton = $('.menu-toggle'),
		nav = $('.main-navigation');

	// toggle button
	toggleButton.on('click', function (e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});

	// nav items
	nav.find('li a').on("click", function () {

		// update the toggle button 		
		toggleButton.toggleClass('is-clicked');
		// fadeout the navigation panel
		nav.fadeOut();

	});


	/*---------------------------------------------------- */
	/* Highlight the current section in the navigation bar
	------------------------------------------------------ */
	var sections = $("section"),
		navigation_links = $("#main-nav-wrap li a");

	sections.waypoint({

		handler: function (direction) {

			var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');

			navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},

		offset: '25%'
	});


	/*---------------------------------------------------- */
	/* Smooth Scrolling
	------------------------------------------------------ */
	$('.smoothscroll').on('click', function (e) {

		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});

	});


	/*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input, textarea, select').placeholder()

	/*----------------------------------------------------- */
	/* Back to top
------------------------------------------------------- */
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

	// Show or hide the sticky footer button
	jQuery(window).scroll(function () {

		if (!($("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}

	});

})(jQuery);