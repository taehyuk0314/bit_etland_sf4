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
							$('form button[type=submit]').click(e=>{
								e.preventDefault();
								register();	
							});
							break;
						case 'emp_l' :
							$(r_cnt).empty();
							$(compo.emp_login_form()).appendTo(r_cnt);
							$('form button[type=submit]').click(e=>{
								e.preventDefault();
								access();	
							});
							break;
						case 'cust_j' : 
							$(r_cnt).empty();
							$(compo.cust_join_form()).appendTo(r_cnt);
							$('form button[type=submit]').click(e=>{
								e.preventDefault();
								join();	
							});
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
					$.ajax({
						url : _+'/users/cust/'+data.customerID,
						type : 'post',
						data : JSON.stringify(data),
						dataType : 'json',
						contentType : 'application/json',
						success : d=>{
							if(d.customerID!==''){
								alert('로그인성공'+d.customerName);
//								$(r_cnt).html(compo.cust_mypage());
								cust.init();
							}else{
								alert('로그인실패');					
							}
						},
						error : e =>{
							alert('실패');							
						}
					});
			
		};
	
		let join =()=>{
			let data ={
					customerID : $('form input[name =cid]').val(),
					customerName : $('form input[name =cname]').val(),
					password : $('form input[name =pass]').val(),
					ssn : $('form input[name =ssn]').val(),
					phone : $('form input[name =phone]').val(),
					city : $('form input[name =city]').val(),
					address : $('form input[name =address]').val(),
					postalCode : $('form input[name =post]').val()
			};
			$.ajax({
				url : _+'/users/cust/',
				type : 'post',
				data : JSON.stringify(data),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.msg==="SUCCESS"){
						alert('회원가입성공');
						$(r_cnt).html(compo.cust_login_form());
						$('form button[type=submit]').click(e=>{
							e.preventDefault();
							login();	
						});
					}else{
						alert('회원가입 실패');
						$(r_cnt).html(compo.cust_join_form());
						join();
					}
				},
				error : e=>{
					alert('실패');
				}
				
			});
		};
		let register=()=>{
			let data ={
					employeeID : $('form input[name =employeeID]').val(),
					manager : $('form input[name =manager]').val(),
					name : $('form input[name =name]').val(),
					birthDate : $('form input[name =birthDate]').val(),
					phone : $('form input[name =phone]').val(),
					notes : $('form input[name =notes]').val()

			};
			$.ajax({
				url : _+'/users/emp',
				type : 'post',
				data : JSON.stringify(data),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.msg==="SUCCESS"){
						alert('회원가입성공');
						$(r_cnt).html(compo.emp_login_form());
						$('form button[type=submit]').click(e=>{
							e.preventDefault();
							login();	
						});
					}else{
						alert('회원가입 실패');
						$(r_cnt).html(compo.emp_join_form());
						join();
					}
				},
				error : e=>{
					alert('실패');
				}
				
			});
		};
		let access =()=>{
			let data = {
					employeeID : $('form input[name=employeeID]').val(),
					name : $('form input[name=name]').val()
					};
			$.ajax({
				url : _+'/users/emp/'+data.employeeID,
				type : 'post',
				data : JSON.stringify(data),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.employeeID!==''){

						$(r_cnt).html(compo.cust_mypage());
						$('form button[type=submit]').click(e=>{
							e.preventDefault();
							$(r_cnt).html(compo.cust_update());
							update();	
							
						});
					}else{
						alert('로그인실패');					
					}
				},
				error : e =>{
					alert('실패');							
				}
			});
		};
		let update =()=>{
			let data={
					customerID : $('form input[name =cid]').val(),
					customerName : $('form input[name =cname]').val(),
					password : $('form input[name =pass]').val(),
					ssn : $('form input[name =ssn]').val(),
					phone : $('form input[name =phone]').val(),
					city : $('form input[name =city]').val(),
					address : $('form input[name =address]').val(),
					postalCode : $('form input[name =post]').val()	
			};
			$.ajax({
				url : _+'/cust/update',
				type : 'put',
				data : JSON.stringify(data),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{},
				error : e =>{}
			});
		};
		
		let remove =()=>{
			let data={
								
						};
			$.ajax({
				url : _+'/cust/delete',
				type : 'delete',
				data : JSON.stringify(data),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{},
				error : e =>{}
			});
		};
		let mypage =()=>{
			
		};
		return {init :init};
})();


