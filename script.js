$(document).ready(function() {
	$(".buttondiv").click(function() {
		$(".ingredientsdiv").toggle(1000);
	});
	$("#ingredients_list li").click(function() {
		$(this).toggleClass("marked");
	});
	$("#instructions_list ul li").click(function() {
		$(this).toggleClass("marked");
	});
});