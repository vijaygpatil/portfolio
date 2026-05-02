$(document).ready(function() {

	$('.welcome-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-welcome").offset().top
		}, 1000);
	});

	$('.skills-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-skills").offset().top
		}, 1000);
	});

	$('.education-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-education").offset().top
		}, 1000);
	});

	$('.experience-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-experience").offset().top
		}, 1000);
	});

	$('.homelab-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-homelab").offset().top
		}, 1000);
	});

	$('.contact-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-contact").offset().top
		}, 1000);
	});

	$('#page-experience .panel-heading, #page-education .panel-heading').click(function(e) {
		if ($(e.target).is('a')) return;
		$(this).find('a[data-toggle="collapse"]').trigger('click');
	});

	$('#msDegreeDetailsCollapse i,#beDegreeDetailsCollapse i').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $('#page-education').offset().top
		}, 1000);
	});

	$('#garminDetailsCollapse i,#niprDetailsCollapse i,#yodleeDetailsCollapse i').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $('#page-experience').offset().top
		}, 1000);
	});

	$('#msDegreeDetails').on('hidden.bs.collapse shown.bs.collapse', function () {
		$('#msDegreeDetailsCollapse i').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
	});

	$('#beDegreeDetails').on('hidden.bs.collapse shown.bs.collapse', function () {
		$('#beDegreeDetailsCollapse i').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
	});

	$('#garminDetails').on('hidden.bs.collapse shown.bs.collapse', function () {
		$('#garminDetailsCollapse i').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
	});

	$('#niprDetails').on('hidden.bs.collapse shown.bs.collapse', function () {
		$('#niprDetailsCollapse i').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
	});

	$('#yodleeDetails').on('hidden.bs.collapse shown.bs.collapse', function () {
		$('#yodleeDetailsCollapse i').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
	});

	$('#page-welcome header h1').addClass('animated fadeInDownBig');
	$('#page-welcome header h2').addClass('animated fadeInRightBig');
	$('#page-welcome .social-icons').addClass('animated fadeInLeftBig');
	$('.contact-me').addClass('animated fadeInUpBig');

	$('#page-welcome').waypoint(function(direction) {
		if(direction == 'down') {
			$('.welcome-nav').css('color','white');
			$('.skills-nav, .education-nav, .experience-nav, .homelab-nav, .contact-nav').css('color','');
		}
	},{
		offset : 51
	});

	$('#page-welcome').waypoint(function(direction) {
		if(direction == 'up') {
			$('.welcome-nav').css('color','white');
			$('.skills-nav, .education-nav, .experience-nav, .homelab-nav, .contact-nav').css('color','');
		}
	},{
		offset : -51
	});

	$('#page-experience .container').waypoint(function(direction) {
		if(direction == 'down') {
			$('.experience-nav').css('color','white');
			$('.welcome-nav, .skills-nav, .education-nav, .homelab-nav, .contact-nav').css('color','');
		}
	},{
		offset : 71
	});

	$('#page-skills .container').waypoint(function(direction) {
		if(direction == 'down') {
			$('.skills-nav').css('color','white');
			$('.welcome-nav, .experience-nav, .education-nav, .homelab-nav, .contact-nav').css('color','');
		}
	},{
		offset : 71
	});

	$('#page-education .container').waypoint(function(direction) {
		if(direction == 'down') {
			$('.education-nav').css('color','white');
			$('.skills-nav, .welcome-nav, .experience-nav, .homelab-nav, .contact-nav').css('color','');
		}
	},{
		offset : 71
	});

	$('#page-homelab .container').waypoint(function(direction) {
		if(direction == 'down') {
			$('.homelab-nav').css('color','white');
			$('.welcome-nav, .skills-nav, .education-nav, .experience-nav, .contact-nav').css('color','');
		}
	},{
		offset : 71
	});

	$('#page-experience .container').waypoint(function(direction) {
		if(direction == 'up') {
			$('.experience-nav').css('color','white');
			$('.welcome-nav, .skills-nav, .education-nav, .homelab-nav, .contact-nav').css('color','');
		}
	});

	$('#page-skills .container').waypoint(function(direction) {
		if(direction == 'up') {
			$('.skills-nav').css('color','white');
			$('.welcome-nav, .experience-nav, .education-nav, .homelab-nav, .contact-nav').css('color','');
		}
	});

	$('#page-education .container').waypoint(function(direction) {
		if(direction == 'up') {
			$('.education-nav').css('color','white');
			$('.skills-nav, .welcome-nav, .experience-nav, .homelab-nav, .contact-nav').css('color','');
		}
	});

	$('#page-homelab .container').waypoint(function(direction) {
		if(direction == 'up') {
			$('.homelab-nav').css('color','white');
			$('.welcome-nav, .skills-nav, .education-nav, .experience-nav, .contact-nav').css('color','');
		}
	});

	$('#page-contact').waypoint(function() {
		$('.contact-nav').css('color','white');
		$('.skills-nav, .welcome-nav, .education-nav, .experience-nav, .homelab-nav').css('color','');
	},{
		offset : function() {return $(window).height() - $(this).height() - $('.page-footer').height();}
	});

	var beforePrint = function() {
		$('#garminDetails').addClass('in');
		$('#niprDetails, #yodleeDetails, #msDegreeDetails, #beDegreeDetails').removeClass('in');
	};
	var afterPrint = function() {
		$('#garminDetails, #msDegreeDetails').addClass('in');
		$('#niprDetails, #yodleeDetails, #beDegreeDetails').removeClass('in');
	};

	if (window.matchMedia) {
		var mediaQueryList = window.matchMedia('print');
		mediaQueryList.addListener(function(mql) {
			if (mql.matches) {
				beforePrint();
			} else {
				afterPrint();
			}
		});
	}
});
