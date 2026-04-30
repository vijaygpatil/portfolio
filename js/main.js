$(document).ready(function() {
$('.page-profile table tr td:first-child').css('padding-top', '0');

	$('.welcome-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-welcome").offset().top
		}, 1000);
	});

	$('.profile-nav, .contact-me').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-profile").offset().top
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

	$('.blog-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-blog").offset().top
		}, 1000);
	});

	$('.contact-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-contact").offset().top
		}, 1000);
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

	var myBirthDay = new Date(1982, 6, 29);
	var today = new Date();
	var oneYearInMillSecs = 1000*60*60*24*365;
	var myAge = Math.floor((today.getTime()-myBirthDay.getTime())/(oneYearInMillSecs));
	$('#myAge').text(myAge+"yo");

	$('#marathiLanguage').on('click', function(){
		window.open('http://en.wikipedia.org/wiki/Marathi_language');
	});

	$('#gujaratiLanguage').on('click', function(){
		window.open('http://en.wikipedia.org/wiki/Gujarati_language');
	});

	$('#hindiLanguage').on('click', function(){
		window.open('http://en.wikipedia.org/wiki/Hindi_language');
	});

	$('#page-profile').waypoint(function(direction) {
		if (direction == 'down') {
			$('#page-profile-facebook').css( "display", "block" ).addClass('animated fadeInLeftBig');
			$('#page-profile-wordpress').css( "display", "block" ).addClass('animated fadeInLeftBig');
			$('#page-profile-linkedin').css( "display", "block" ).addClass('animated fadeInLeftBig');
		}
		},{	offset : '25%',
			triggerOnce: true
	});

	$('#myProgressbar5').waypoint(function() {
		$('#myProgressbar1').progressbar(75);
		$('#myProgressbar2').progressbar(80);
		$('#myProgressbar3').progressbar(85);
		$('#myProgressbar4').progressbar(90);
		$('#myProgressbar5').progressbar(70);
	},{
		offset : 'bottom-in-view'
	});

	$('#page-welcome').waypoint(function(direction) {
		if(direction == 'down') {
			$('.welcome-nav').css('color','white');
			$('.profile-nav, .skills-nav, .education-nav, .experience-nav, .contact-nav, .blog-nav').css('color','');
		}
	},{
		offset : 51
	});

	$('#page-welcome').waypoint(function(direction) {
		if(direction == 'up') {
			$('.welcome-nav').css('color','white');
			$('.profile-nav, .skills-nav, .education-nav, .experience-nav, .contact-nav, .blog-nav').css('color','');
		}
	},{
		offset : -51
	});

	$('#page-profile .container').waypoint(function(direction) {
		if(direction == 'down') {
			$('.profile-nav').css('color','white');
			$('.welcome-nav, .skills-nav, .education-nav, .experience-nav, .contact-nav, .blog-nav').css('color','');
		}
	},{
		offset : 71
	});

	$('#page-skills .container').waypoint(function(direction) {
		if(direction == 'down') {
			$('.skills-nav').css('color','white');
			$('.profile-nav, .welcome-nav, .education-nav, .experience-nav, .contact-nav, .blog-nav').css('color','');
		}
	},{
		offset : 71
	});

	$('#page-education .container').waypoint(function(direction) {
		if(direction == 'down') {
			$('.education-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .experience-nav, .contact-nav, .blog-nav').css('color','');
		}
	},{
		offset : 71
	});

	$('#page-experience .container').waypoint(function(direction) {
		if(direction == 'down') {
			$('.experience-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .education-nav, .contact-nav, .blog-nav').css('color','');
		}
	},{
		offset : 71
	});

	$('#page-blog .container').waypoint(function(direction) {
		if(direction == 'down') {
			$('.blog-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .education-nav, .experience-nav, .contact-nav').css('color','');
		}
	},{
		offset : 71
	});

	$('#page-profile .container').waypoint(function(direction) {
		if(direction == 'up') {
			$('.profile-nav').css('color','white');
			$('.welcome-nav, .skills-nav, .education-nav, .experience-nav, .contact-nav, .blog-nav').css('color','');
		}
	});

	$('#page-skills .container').waypoint(function(direction) {
		if(direction == 'up') {
			$('.skills-nav').css('color','white');
			$('.profile-nav, .welcome-nav, .education-nav, .experience-nav, .contact-nav, .blog-nav').css('color','');
		}
	});

	$('#page-education .container').waypoint(function(direction) {
		if(direction == 'up') {
			$('.education-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .experience-nav, .contact-nav, .blog-nav').css('color','');
		}
	});

	$('#page-experience .container').waypoint(function(direction) {
		if(direction == 'up') {
			$('.experience-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .education-nav, .contact-nav, .blog-nav').css('color','');
		}
	});

	$('#page-blog .container').waypoint(function(direction) {
		if(direction == 'up') {
			$('.blog-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .education-nav, .experience-nav, .contact-nav').css('color','');
		}
	});

	$('#page-contact').waypoint(function() {
			$('.contact-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .education-nav, .experience-nav, .blog-nav').css('color','');
	},{
		offset : function() {return $(window).height() - $(this).height() - $('.page-footer').height();}
	});

	$.ajax({
        type: 'GET',
        url: 'feed/blogfeed.xml',
        dataType: 'xml',
        success: function (xml) {
            $(xml).find("item").each(function (index) {
                var title = $(this).find("title").text();
                var description = $(this).find("description").text();
                var linkUrl = $(this).find("link").text();
                var link = " <a href='" + linkUrl + "' target='_blank'><h4>Read More...</h4><a>";
                $('#feedContainer').append('<article><h3>'+title+'</h3><p class="text-info">'+description+link+'</p>');
                if(index == 4) {
                	$('#feedContainer').append("<br /><a target='_blank' href='http://patilvijayg.synology.me/wordpress'><h4>Read More Topics...<h4></a>");
                	return false;
                }
            });
        }
    });

	$('#printResume').click(function() {
		$('#garminDetails').addClass('in');
		$('#niprDetails, #yodleeDetails, #msDegreeDetails, #beDegreeDetails').removeClass('in');
		window.print();
		$('#garminDetails, #msDegreeDetails').addClass('in');
		$('#niprDetails, #yodleeDetails, #beDegreeDetails').removeClass('in');
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
