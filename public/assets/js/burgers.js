$(function() {

	$(".devour-it").on("click", function(event) {
		var id = $(this).data("id");
		console.log("Devour it clicked, id: " + id);

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
		}).then(
			function() { location.reload() }
		);

	 });
})