$(window).scroll(function() {    
    var scrollDown = $(window).scrollTop();

    if (scrollDown >= 250) {
        $("#headerLogo").addClass("headerLogoShift");
        $("#logoBlocker").addClass("logoBlockerTransparent");
        $("#freeTrialLink").addClass("freeTrialLinkBordered");
        $( ".navFader" ).addClass("navFaderFade");
        $( "#freeTrialMobileCenter" ).addClass("freeTrialMobileCenterShow");
    }
});

$(window).scroll(function() {    
    var scrollUp = $(window).scrollTop();

    if (scrollUp <= 250) {
        $("#headerLogo").removeClass("headerLogoShift");
        $("#logoBlocker").removeClass("logoBlockerTransparent");
        $("#freeTrialLink").removeClass("freeTrialLinkBordered");
        $( ".navFader" ).removeClass("navFaderFade");
        $( "#freeTrialMobileCenter" ).removeClass("freeTrialMobileCenterShow");
    }
});


$("#hamburger").click(function() {
	$("#wrapper").toggleClass("wrapperPush");
	$("header").toggleClass("headerPush");
    $("#barOne").toggleClass("barOneEffect");
    $("#barTwo").toggleClass("barTwoEffect");
    $("#barThree").toggleClass("barThreeEffect");
    $("#freeTrialMobileCenter").toggleClass("hide");
})