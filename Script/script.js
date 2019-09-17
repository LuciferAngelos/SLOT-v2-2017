$(document).ready(function (){
	$(".spoiler-title").click(function(){
		$(this).parent().children(".spoiler-content").toggle("fast");
		return false;
	})
})

$(document).ready(function (){
	$(".sostav-img").click(function(){
		$(this).parent().children(".sostav-content").toggle("fast");
		return false;
	})
})

$(document).ready(function (){
	$(".item").magnificPopup({
		type:"image",
		gallery:{
			enabled:true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
});