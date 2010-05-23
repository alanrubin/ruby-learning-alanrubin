jQuery.fn.alanrubin = function() {
   if($(this).is('p')) {
		$(this).hover(function(e) {
			$(this).css("font-weight","bold");
		},	function(e) {
				$(this).css("font-weight","normal");
			});
	}
 };
