var cust = cust||{};
cust =(()=>{
	let init =()=>{
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		mypage();
	};
	let mypage =()=>{
		$('#right_content').html(compo.cust_mypage);
	};
	return {init : init};
})();

