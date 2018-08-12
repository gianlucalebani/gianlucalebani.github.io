$(document).ready(function(){

	// accordion
	
    lastBlock_id = "about_me";
    maxHeight = 260; 
    minHeight = 34;	

    $("ul.acc li.acc div.acc_sect").click(
		function(){
			$("#"+lastBlock_id).animate({height: minHeight+"px"}, { queue:false, duration:400 });
			$(this).animate({height: maxHeight+"px"}, { queue:false, duration:400});
			
			if (lastBlock_id != $(this).attr('id')){  // don't show/hide content when clicking two times on the same accordion header
				$("#"+lastBlock_id+"_content").fadeOut(200);
				lastBlock_id = $(this).attr('id');
				$("#"+lastBlock_id+"_content").delay(100).fadeIn(400);
			}
		}
    );

	
	// launch randomPic function at startup
	
	$('#profile_pic img').randomPic('pictures/');  // folder name 
	
});


// function for loading a random pic at startup

$.fn.randomPic = function(images_folder) {
	
	var images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg'];  // add pic filenames here
		
	$(this).attr('src',images_folder + images[Math.floor(Math.random() * images.length)])

};
