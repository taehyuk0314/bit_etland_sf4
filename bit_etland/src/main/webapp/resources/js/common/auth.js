var auth = auth || {};
auth.permission = (()=>{
		let init =()=>{
			onCreate();
		};
		let onCreate =()=>{

			setContentView();
		};
		let setContentView=()=>{
			
		};
		
		let login =()=>{
			$.getScript($.js()+'/component/compo.js')
			.done(()=>{
				$('#right_content').html(compo.cust_login_form());
				$('form button[type=submit]').click(()=>{
					let data = {
							customerID : $('form input[name=uname]').val(),
							password : $('form input[name=psw]').val()
							};
					alert(data.customerID);
					$.ajax({
						url : $.ctx()+'/cust/login/',
						type : 'post',
						data : JSON.stringify(data),
						dataType : 'json',
						contentType : 'application/json',
						success : d=>{},
						error : e =>{}
					});
				});
				$('#left_content ul.nav').empty();
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
						$('#right_content').empty();
						$(compo.emp_join_form()).appendTo('#right_content');
						break;
					case 'emp_l' :
						$('#right_content').empty();
						$(compo.emp_login_form()).appendTo('#right_content');
						break;
					case 'cust_j' : 
						$('#right_content').empty();
						$(compo.cust_join_form()).appendTo('#right_content');
						break;
					case 'cust_l' : 
						$('#right_content').empty();

						$(compo.cust_login_form()).appendTo('#right_content');
						break;
						};
					});		
				})
			})
			.fail(()=>{
				alert('component/compo.js를 찾지 못했습니다');
			});
		};
		let join =()=>{};
		let mypage =()=>{};
		return {
			login : login,
			join : join,
			mypage : mypage
		};
})();


