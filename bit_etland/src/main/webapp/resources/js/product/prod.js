var prod = prod ||{}
prod =(()=>{
	let _,js,compojs,r_cnt,l_cnt;
	let init =()=>{
		_= $.ctx();
		js= $.js();
		compojs =js + '/component/compo.js';
		r_cnt = '#right_content';
		l_cnt = '#left_content';
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		$.getScript(compojs,()=>{
			$(r_cnt).html(compo.carousel());

		shop();
		post();
		});
	};
	let shop =()=>{
		$(compo.carousel()).appendTo(r_cnt);
		$('#prod1').attr('src',$.img()+"/chi.jpg").css('width','600px');
		$('#prod2').attr('src',$.img()+"/duk.jpg").css('width','600px');
		$('#prod3').attr('src',$.img()+"/sam.png").css('width','600px');
	};
	let post =()=>{
		$(compo.prod_post()).appendTo(r_cnt);
	};
	let get =()=>{
		
	};
	let put =()=>{
		
	};
	let del =()=>{
		
	};
	return {init : init};
})();
