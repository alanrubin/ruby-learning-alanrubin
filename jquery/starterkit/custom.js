jQuery(document).ready(function() {
	$("#orderedlist").addClass("red");
	$("#orderedlist li:eq(1)").hover(function() {
	     $(this).addClass("green");
	   },function(){
	     $(this).removeClass("green");
	   });
	$("#orderedlist").find("li").each(function(i) {
	     $(this).append( " BAM! " + i );
	   });
	 $("li").not(":has(ul)").css("border", "1px solid black"); 
	$("a[name]").css("background", "#121212" );
	
	$('#faq').find('dd').hide().end().find('dt').click(function() {
     $(this).next().slideToggle();
   });
 $("a").hover(function(){
     $(this).parents("p").addClass("highlight");
   },function(){
     $(this).parents("p").removeClass("highlight");
   });



	// generate markup
   $("#rating").append("Please rate: ");

   for ( var i = 1; i <= 5; i++ )
     $("#rating").append("<a href='#'>" + i + "</a> ");

   // add markup to container and apply click handlers to anchors
   $("#rating a").click(function(e){
     // stop normal link click
     e.preventDefault();

	 alert($(this).html());
	
     // send request
     $.post("rate.html", {rating: $(this).html()}, function(xml) {
       // format and output result
       $("#rating").html(
         "Thanks for rating, current average: " +
         $("average", xml).text() +
         ", number of votes: " +
         $("count", xml).text()
       );
     });
   });

 $("a").toggle(function(){
     $(".stuff").animate({ height: 'hide', opacity: 'hide' }, 'slow');
   },function(){
     $(".stuff").animate({ height: 'show', opacity: 'show' }, 'slow');
   });

	$("p").alanrubin();
	
    $("a").alanrubin();

});