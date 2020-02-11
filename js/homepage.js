(function() {
	
		var blur = document.getElementById('blur');



		function scrollBlur(){
			blur.style.opacity = (window.scrollY / 455).toFixed(2);
		}


		window.addEventListener('scroll', scrollBlur);


		var scroll = window.requestAnimationFrame ||
					 function(callback){window.setTimeout(callback, 1000/60)};
		var elementsToShow = document.querySelectorAll('.show-on-scroll');
		var headerToShow = document.querySelectorAll('.to-show');

		function isElementInViewport(el){
			var rect = el.getBoundingClientRect();
			return (
				(rect.top <= 0
				&& rect.bottom >= 0)
			||
			(rect.bottom >= (window.innerHeight || document
				.documentElement.clientHeight)&&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight))
			||
			(rect.top >= 0 && 
				rect.bottom <= (window.innerHeight || document
					.documentElement.clientHeight))
			);


		}

		/*check if in the viewport*/
		function loop(){
			elementsToShow.forEach(function (element) {
				if(isElementInViewport(element)){
					element.classList.add('is-visible');
				}
				else{
					element.classList.remove('is-visible');
				}

			});

			headerToShow.forEach(function (element) {
				if(isElementInViewport(element)){
					element.classList.add('header-visible');
				}
				else{
					element.classList.remove('header-visible');
				}

			});

			scroll(loop);
		}

		loop();


	})();