var btn = document.getElementById("boton-click");
	var btnBack = document.getElementById("botonBack");
	let morph = document.getElementById('morph');
	let overlay = document.getElementById('seccion');


	let morphing = anime({
		targets: '.primeraPath',
		d: [
			
			/*{ value: 'M0,109c0,0,220,349.3,260.5,152.8c18-60,89.1-224.7,257.1,58.8c57,91.5,253,135.4,318-110C869,59,960,287.6,960,287.6V0H1L0,109z' },*/
			{ value: 'M0,312c0,0,220,349.3,260.5,152.8c18-60,89.1-303.7,257.1-20.2c57,91.5,253,293.4,318,48C869,341,960,569.6,960,569.6V0H1L0,312z', duration:800, easing:'easeInCubic'  } ,
			{ value: 'M0,383.6c0,0,214.6,397.5,255.1,201c18-60,108-331.5,276-48c57,91.5,239.5,201.4,304.5-44C869,341,960,569.6,960,569.6V0H1L0,383.6z' , duration:800, easing:'easeInCubic'} ,
			{value: 'M0,14c0,0,220,349.3,260.5,152.8c18-60,89.1-303.7,257.1-20.2c57,91.5,253,293.4,318,48C869,43,960,271.6,960,271.6V0H1L0,14z', duration:400,},

		],

		easing: 'easeInOutQuint',
		duration: 2000,
		loop:false,
		autoplay:false
	})

	

	

	let isVisible = false;
	console.log(isVisible);
	$(btn).click(function(){
	    
   		isVisible = !isVisible;
   		if(isVisible){
   			morphing.play();
			$(".seccion").toggleClass('pointer');
			$('.cabecera-modal').addClass('cabeceraActive');
			morphing.restart();
		
   		} else{
   			morphing.restart();
   			morphing.play();
   			$('.cabecera-modal').removeClass('cabeceraActive');
   		}
	});
	