var app = app||{};
app =(()=>{
	let init = x=>{		
		app.$.init(x);
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.when(
				$.getScript($.js()+'/component/compo.js'),
				$.getScript($.js()+'/employee/emp.js'),
				$.getScript($.js()+'/customer/cust.js')
			  ).done(
					()=>{			
						cust.permission.login();
						_navibar.nav();
					}					
			  );
	};
	return {init : init,
		onCreate : onCreate};
	})();

app.$={
		init :(x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Session(x));
			app.onCreate();

		})
	}
};
var _navibar={
		nav : ()=>{
			$('#nav_bar').children('li').eq(0).html('<a href="#" id="nav1">로그인</a>')
			.click(()=>{
				$('#right_content').html(compo.cust_login_form);
			});
			$('#nav_bar').children('li').eq(1).html('<a href="#" id="nav2">회원가입</a>')
			.click(()=>{
				$('#right_content').html(compo.cust_join_form());
			});
			$('#nav_bar').children('li').eq(2).html('<a href="#" id="nav3">사원로그인</a>')
			.click(()=>{
				$('#right_content').html(compo.emp_login_form)
			});
			$('#nav_bar').children('li').eq(3).html('<a href="#" id="nav4">사원가입</a>')
			.click(()=>{
				$('#right_content').html(compo.emp_join_form)
			});
		}
		
};
