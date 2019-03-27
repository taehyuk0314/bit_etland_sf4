var auth = auth || {};
auth = (()=>{
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
		let setContentView=()=>{
			$.getScript(compojs)
			.done(()=>{
				$(r_cnt).empty();
				$(compo.cust_login_form())
				.appendTo(r_cnt);
				
				$(l_cnt+' ul.nav').empty();
				$('form button[type=submit]').click(e=>{
					e.preventDefault();
					login();	
				});
				let arr =[
					{name : 'emp_j', val : '사원가입'},
					{name : 'emp_l', val : '사원로그인'},
					{name : 'cust_j', val : '회원가입'},
					{name : 'cust_l', val : '회원로그인'}
				];
				$.each(arr,(i,j)=>{
					$('<li><a href="#">'+j.val+'</a></li>')
					.appendTo('#left_content ul.nav')
					.attr('name',j.name)
					.click(function(){
						let that = $(this).attr('name');
						switch(that){
						case 'emp_j' : 
							$(r_cnt).empty();
							$(compo.emp_join_form()).appendTo(r_cnt);
							break;
						case 'emp_l' :
							$(r_cnt).empty();
							$(compo.emp_login_form()).appendTo(r_cnt);
							break;
						case 'cust_j' : 
							$(r_cnt).empty();
							$(compo.cust_join_form()).appendTo(r_cnt);
							break;
						case 'cust_l' : 
							$(r_cnt).empty();
							$(compo.cust_login_form()).appendTo(r_cnt);
							$('form button[type=submit]').click(e=>{
								e.preventDefault();
								login();	
							});
							break;
							};
						});		
					})
			})
					.fail(()=>{
						alert('component/compo.js를 찾지 못했습니다');
					});
		};
		
		let login =()=>{
				
					let data = {
							customerID : $('form input[name=uname]').val(),
							password : $('form input[name=psw]').val()
							};
					alert(data.customerID);
					$.ajax({
						url : $.ctx()+'/cust/login',
						type : 'post',
						data : JSON.stringify(data),
						dataType : 'json',
						contentType : 'application/json',
						success : d=>{
							if(d.customerID!==''){
								alert('로그인성공'+d.customerName);
								$(r_cnt).html(compo.cust_mypage());
							}else{
								alert('로그인실패');					
							}
						},
						error : e =>{
							alert('실패');							
						}
					});
			
		};
		let join =()=>{};
		let mypage =()=>{};
		return {init :init};
})();


