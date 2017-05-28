import 'jquery'


	var	$window = $(window),
			$body = $('body')


		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-loading');
			}, 100);
			var mn = $("#mainNav"),
					mnft = "navbar-fixed-top",
					mnst = "navbar-static-top",
					hdr = $('#header').height(),
					wrapper = $('#wrapper'),
					wrapper_padding = parseFloat(wrapper.css("padding-top")),
					mnheight = parseFloat($('#mainNavContainer').height()),
					newHeight = wrapper_padding + mnheight + 'px'
			console.log(`Debug :
				hdr: ${hdr}
				mn : ${wrapper_padding}
				mnheight: ${mnheight}
				new height: ${newHeight}`)

		$window.scroll(function() {
			if( $(this).scrollTop() > hdr ) {
				wrapper.css("padding-top", newHeight)
				mn.addClass(mnft)
				mn.removeClass(mnst)
			} else {
				wrapper.css("padding-top", (wrapper_padding + 'px'))
				mn.removeClass(mnft)
				mn.addClass(mnst)
			}
		});
		});



	// Items.
		$('.item').each(function() {

			var $this = $(this),
				$header = $this.find('header'),
				$a = $header.find('a'),
				$img = $header.find('img');

			// Set background.
				$a.css('background-image', 'url(' + $img.attr('src') + ')');

			// Remove original image.
				$img.remove();

		});
