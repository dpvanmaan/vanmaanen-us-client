$(document).ready(function () {
    console.log("ready");
    $('[data-toggle="offcanvas"]').click(function () {
	console.log("active");
	$('.row-offcanvas').toggleClass('active');
     
    });
});
