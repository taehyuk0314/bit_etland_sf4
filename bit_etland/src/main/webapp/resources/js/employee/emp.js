var emp = emp || {};
	emp=(()=>{
		let _,js,compojs,r_cnt,l_cnt;
		let path =()=>{
			_= $.ctx();
			js= $.js();
			compojs =js + '/component/compo.js';
			prodjs = js+ '/product/prod.js';
			r_cnt = '#right_content';
			l_cnt = '#left_content';
		};
		let init =()=>{
			path();
			onCreate();
		};
		let onCreate =()=>{
			setContentView();

		};
		let setContentView =()=>{};
		let emp_nav =(x)=>{
			path();
			$('#left_content ul.nav').empty();
			$('#nav_name').text('고객');
			let arr =[
				{name : 'cust_l' , val : '고객 목록'},
				{name : 'prod_r' , val : '상품 등록'},
				{name : 'prod_l' , val : '상품 목록'},
				{name : 'prod_u' , val : '상품 수정'},
				{name : 'prod_d' , val : '상품 삭제'},
				{name : 'prod_st' , val : '상품 통계'}
				];
			$.each(arr,(i,j)=>{
				$('<li><a href="#">'+j.val+'</a></li>')
				.appendTo(l_cnt+' ul.nav')
				.attr('name',j.name)
				.attr('id', j.name)
				.click(function(){
					let that = $(this).attr('name');
					$(this).addClass('active');
					$(this).siblings().removeClass('active');
				})
			});
			$('#cust_l').addClass('active');
		};	
	
		return{init : init,
			emp_nav : emp_nav};
	})();
/*
 * 고객 목록
 * 상품 등록
 * 상품 목록
 * 상품 수정
 * 상품 삭제
 * 상품 통계
 */