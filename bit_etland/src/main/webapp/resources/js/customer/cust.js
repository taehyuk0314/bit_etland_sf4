var cust = cust||{};
cust =(()=>{
	let _,js,compojs,r_cnt,l_cnt;
	let init =()=>{
		_= $.ctx();
		js= $.js();
		compojs =js + '/component/compo.js';
		prodjs = js+ '/product/prod.js';
		r_cnt = '#right_content';
		l_cnt = '#left_content';
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		$.getScript(compojs,()=>{
			$('#left_content ul.nav').empty();
			mypage();
			let arr=[
				{ name : 'myp' ,txt : '마이페이지'},
				{ name : 'upd' ,txt : '정보수정'},
				{ name : 'del' ,txt : '회원탈퇴'},
				{ name : 'shop' ,txt : '쇼핑몰'},
				{ name : 'buy' ,txt : '구매내역'},
				{ name : 'basket' ,txt : '장바구니'}
			];
			$.each(arr,(i,j)=>{
				$('<li><a href="#">'+j.txt+'</a></li>')
				.appendTo('#left_content ul.nav')
				.attr('name',j.name)
				.attr('id', j.name)
				.click(function(){
					let that = $(this).attr('name');
					 $(this).addClass('active');
					 $(this).siblings().removeClass('active');
					switch (that) {
					case 'myp':
						alert('마이페이지 클릭');
						$(r_cnt).empty();
						$(compo.cust_mypage()).appendTo(r_cnt);
						break;
					case 'upd':
						$(r_cnt).empty();
						$(compo.cust_update()).appendTo(r_cnt);
						break;
					case 'del':
						$(r_cnt).empty();
						$(compo.cust_update()).appendTo(r_cnt);
						break;
					case 'shop':
						alert('쇼핑몰 클릭');
						$(r_cnt).empty();
						$.getScript(prodjs,()=>{
							prod.init();
						}).fail(()=>{})
						break;
					case 'buy':
						$(r_cnt).empty();
						$(compo.cust_update()).appendTo(r_cnt);
						break;
					case 'basket':
						$(r_cnt).empty();
						$(compo.cust_update()).appendTo(r_cnt);
						break;
					};
				});

			
			});
		$('#mypage').addClass('active');
		});
	};
	
	
	let mypage =()=>{
		$(r_cnt).html(compo.cust_mypage);				
	};
	
	return {init : init};
})();

/*
* 정보수정
* 회원탈퇴
* 쇼핑몰
* 구매내역
* 장바구니
*/