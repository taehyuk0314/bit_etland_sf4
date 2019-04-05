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
				$('#search_name').hide();
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
					.attr('id', j.name)
					.click(function(){
						let that = $(this).attr('name');
						 $(this).addClass('active');
						 $(this).siblings().removeClass('active');
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
					$('#cust_l').addClass('active');
					$('#srch_grp').hide();
					$('#srch_btn').hide();
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
						url : _+'/customers/'+data.customerID,
						type : 'post',
						data : JSON.stringify(data),
						dataType : 'json',
						contentType : 'application/json',
						success : d=>{
							if(d.customerID!==''){
//								alert('로그인성공'+d.customerName);
								cust.init(d);
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
				url : _+'/customers',
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
				url : _+'/employees',
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
			let ok = confirm('사원 입니까?');
			if(ok){
				let emp_no = prompt('사원번호 입력하세요');
				$.getJSON( _+'/employees',d=>{
					if(emp_no===d.employeeID){
						alert('사원인증');
						let emp_name = prompt('이름을 입력하세요');	
						if(emp_name ===d.name){
							alert('사원이름 '+d.name);
							$.getScript(js+'/customer/cust.js',()=>{
								cust.list(1);
							});
							
						}else{
							alert('이름이 일치하지 않습니다');
						}
					}else{
						// 사원번호가 일치하지 않습니다.
						alert('사원번호가 일치하지 않습니다');
					}
				});
				
				
			}else{
				alert('사원전용페이지 입니다');
				// 사원 전용 페이지 입니다
				// 되돌아가기 버튼이 보인다
			}

		};

		

		let mypage =()=>{
			
		};
		return {init :init};
})();


