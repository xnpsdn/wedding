
// ready
$( document ).ready(function(){

	// new window
	$( '#newwindow' ).on( 'click', function( e ){

		// get path
		var path = $( '#leframe' ).attr( 'src' );

		// open
		window.open(path,'_blank');
	});

	// on nav click
	$( '.nav-sidebar li a' ).on( 'click', function( e ){

		// prevent
		e.preventDefault();

		// get
		var anchor = $( this ).attr( 'data-frame' );

		// set
		$( '#leframe' ).attr( 'src', anchor);

		// this
		$( '.nav-sidebar li' ).removeClass( 'active' );
		$( this ).parent().addClass( 'active' );
	});

	// adjust viewport
	resizeViewport();

	// update framesize
	updateFramesize();

	// adjust modal iframe
	resizeModal();

	// toggle responsive
	toggleresponsive();


	//method
	function toggleresponsive () {

		//toggle nicescroll
		// $('iframe').niceScroll({
		// 	cursorcolor: "#fafafa"
		// });

		//refresh the iframe
		var iframe = $('iframe');
		iframe.src = iframe.src;

		$( ' .responsive-toggle ' ).click(function(e){

			e.preventDefault();

			//refresh all the transforms
			if( $(this).hasClass('active') ){
				$( ' .portrait-toggle ' ).removeClass('active');
				$( ' .landscape-toggle ' ).removeClass('active');
				$( ' .viewport-frame ' ).removeClass('rotate');
				$( ' .viewport-frame ' ).css('transform','');
			}


			//toggle the active
			$(this).toggleClass('active');

			$( ' .main ' ).toggleClass('responsive');
			$( ' .vp.mobile ' ).toggleClass('active');

			$( ' .portrait-toggle ' ).addClass('active');

			$( ' .portrait-toggle ' ).click(function(e) {
				$( ' .viewport-frame ' ).css('transform', '');
				$(this).siblings( ' .landscape-toggle ' ).removeClass('active');
				$(this).addClass('active');
				e.preventDefault();
				$( ' .viewport-frame ' ).removeClass('rotate');
			})

			$( ' .landscape-toggle ' ).click(function(e) {
				$( ' .viewport-frame ' ).css('transform', '');
				$(this).siblings( ' .portrait-toggle ' ).removeClass('active');
				$(this).addClass('active');
				e.preventDefault();
				$( ' .viewport-frame ' ).addClass('rotate');
			})
		})

		//zooming tool
		$( ' .zoom ' ).click(function(e){
			e.preventDefault();
			var str = $( ' .viewport-frame ' ).css('transform') + '';
			var res = str.replace('matrix', '').replace('(','').replace(')','');
			res = res.split(', ');

			if( $( ' .viewport-frame ' ).hasClass('rotate')){

				if( $(this).hasClass('inn')) {

					//zoom in
					if(res[1] < 1){
						res[1]= parseFloat(res[1]) + 0.1;
						res[2]= parseFloat(res[2]) - 0.1;
					}

				} else {

					//zoom out
					if(res[1] >= 0.5){
						res[1]= parseFloat(res[1]) - 0.1;
						res[2]= parseFloat(res[2]) + 0.1;
					}
				}
			} else {
				if( $(this).hasClass('inn')) {

					if(res[0] < 1){
						res[0]= parseFloat(res[0]) + 0.1;
						res[3]= parseFloat(res[3]) + 0.1;
					}

				} else {
					if(res[0] >= 0.5){
						res[0]-=0.1;
						res[3]-=0.1;
					}
				}
			}

			str = 'matrix(' + res + ')';
			$( ' .viewport-frame ' ).css('transform', str);
			// console.log( $( ' .viewport-frame ' ).css('transform') );

		})

		//resposive-tool
		//vp stands for viewport
		$( ' .vp ' ).click(function(e){

			$( ' .vp ' ).removeClass('active');
			$(this).addClass('active');

			if( $(this).hasClass('mobile')){
				//mobile treatment
				$( ' .viewport-frame ' ).removeClass('tablet');
			} else {
				//tablet treatment
				$( ' .viewport-frame ' ).addClass('tablet');
			}
		})
	}

	//nice scroll initiation
	//not used for a while due to transform bug
	function initscroll () {
		$('iframe').niceScroll({
			cursorcolor: "#fafafa"
		});
	}

	function refreshScroll() {
		$("iframe").getNiceScroll().resize();
	}

	// on window change
	$( window ).resize( function(){

		// adjust viewport
		resizeViewport();

		// update frame size
		updateFramesize();

		// adjust modal iframe
		resizeModal();
	});

	// Load the apropiate title and development version of the page
	// from readme.md file
 	var mdFile = "site/changelog.html";

 	// method to get title from readme.md
 	// !important : title is located at line #1
	function getTitle(inputMd){
	    $.get(inputMd,function(txt){
	        var lines = txt.split("\n");
	        // console.log(lines);
	        // get title and put it to apropiate location
	        $("header .container > h1").html(lines[0]);
	    });
	}

	// method to get development version of the website
	// !important : latest version is located at line #3
	function getVersion(inputMd){
	    $.get(inputMd,function(txt){
	        var lines = txt.split("\n");
	        // get version
	        console.log(lines[1]);
	        $(".version").html(lines[1]);
	    });
	}

	// get the title and version
	getTitle(mdFile);
	getVersion(mdFile);
});

// method helper to resize modal iframe
function resizeModal () {

	// get window size
	var frameHeight = $( window ).height();

	// resize
	$( '.modal iframe' ).css( "height",frameHeight+'px' );

}

// method helper to resize view mode
function resizeViewport() {

	// get window size height
	var frameHeight = $( window ).height() - $( '.navbar' ).height();

	// resize
	$( '.main iframe' ).css( "height",frameHeight+'px' );
}

// function to update framesize info
function updateFramesize() {

	// get window width
	var width = $( '#leframe' ).width(),
		height = $( '#leframe' ).height();

	// set
	$( '.framesize' ).html( width+"x"+height);
}
