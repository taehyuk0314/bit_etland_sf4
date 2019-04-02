var cust = cust||{};
cust =(()=>{
	let _,js,compojs,r_cnt,l_cnt;
	let path =()=>{
		_= $.ctx();
		js= $.js();
		compojs =js + '/component/compo.js';
		prodjs = js+ '/product/prod.js';
		r_cnt = '#right_content';
		l_cnt = '#left_content';
	};
	let init =(x)=>{
		path();
		onCreate(x);
	};
	let onCreate =(x)=>{
		setContentView(x);
	};
	let setContentView =(x)=>{
		cust_nav(x);
	};
	let update =(x)=>{
		path();
		let data={
				customerID : x.customerID,
				password : $('form input[name =pass]').val(),
				phone : $('form input[name =phone]').val(),
				city : $('form input[name =city]').val(),
				address : $('form input[name =address]').val(),
				postalCode : $('form input[name =post]').val()	
		};
		$.ajax({
			url : _+'/customers/update',
			type : 'put',
			data : JSON.stringify(data),
			dataType : 'json',
			contentType : 'application/json; charset=utf-8',
			success : d=>{
				if(d.customerID!==''){
					alert('정보수정완료');
					mypage();
				}else{
					alert('올바르지않은 문구입니다');
				}
			},
			error : e =>{
				alert('실패!!');
			}
		});
	};
	let remove =()=>{
		path();
		let data ={
			password : $('form input[name =pass]').val()
		}
		$.ajax({
			url : _+'/customers/delete',
			type : 'delete',
			data : JSON.stringify(data),
			dataType : 'json',
			contentType : 'application/json',
			success : d=>{
				if(d.password!==''){
					alert('이용해주셔서 감사합니다');
					$.getScript(js+'/common/auth.js',()=>{
						auth.init();
					});
						
					
				}else{
					alert('비밀번호가 일치하지않습니다');
				}
			},
			error : e =>{
				alert('실패');
			}
		});
	};
	let mypage =(x)=>{
		$(r_cnt).html(compo.cust_mypage);				
	};
	let list =()=>{
		path();
		$.getScript(js+'/employee/emp.js',()=>{
			emp.emp_nav();
		});
		$.getScript(compojs,()=>{
			$(r_cnt).html(compo.cust_list);
			$.getJSON(_+'/customers/page/1',d=>{
				$.each(d.ls,(i,j)=>{
					$('<tr> <td>'+j.rnum+'</td>'
							+'<td>'+j.customerID+'</td>'
							+'<td>'+j.customerName+'</td>'
							+'<td>'+j.ssn+'</td>'
							+'<td>'+j.photo+'</td>'
							+'<td>'+j.phone+'</td>'
							+'<td>'+j.city+'</td>'
							+'<td>'+j.address+'</td>'
							+'<td>'+j.postalCode+'</td> </tr>')
					.appendTo('#cust_tab');
				});
		
		$('<div style="height: 50px" id="content_1"></div>')
		.appendTo('#content_2');

		let html ='<div class="center">';
		html +='<div class="pagination">';
		if(d.pxy.existPrev){
			html += '<a href=${ctx}/customer.do?cmd=cust_list&page=list&page_num=${pagination.prevBlock}>&laquo;</a>';
		}
		for(let i=1;i<6;i++){
			if(d.pxy.pageNum ==status.index){
				html +='<a href="#"class=page active>'+i+'</a>';
			}else{
				html +='<a href="#"class=page>'+i+'</a>';
			}
		}
//		if(d.pxy.existNext){
			html +='<a href=${ctx}/customer.do?cmd=cust_list&page=list&page_num=${pagination.nextBlock} >&raquo;</a>';
//		}
		html +='</div></div>';
		$(html).appendTo('#content_1');
		});
		});
		/**
		 * 	<div style="height: 50px"></div>    	
	<div class="center">
	  <div class="pagination">
	  <form id="form" name="form">
	 <c:if test="${pagination.existPrev}">
		  <a href='${ctx}/customer.do?cmd=cust_list&page=list&page_num=${pagination.prevBlock}'>&laquo;</a>
	  </c:if>
	  <c:forEach begin="${pagination.startPage}" end="${pagination.endPage}" varStatus="status">
	  <c:choose>
	  	<c:when test="${pagination.pageNum eq status.index}" >
	  	 	<a href="#"class='page active'>${status.index}</a>
	  	</c:when>
	  	<c:otherwise>
	  	 	<a href="#"class='page'>${status.index}</a>
	  	</c:otherwise>
	  </c:choose>
	  </c:forEach>
	  <c:if test="${pagination.existNext}">
	  	<a href='${ctx}/customer.do?cmd=cust_list&page=list&page_num=${pagination.nextBlock}' >&raquo;</a>
	  </c:if>

	  </form>
	  </div>	  
	</div>
		 * */
			
	};
	let cust_nav=(x)=>{
		$.getScript(compojs,()=>{
			$('#left_content ul.nav').empty();
			mypage(x);
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
						$('form button[type=submit]').click(e=>{
							e.preventDefault();
							update(x);	
						});
						break;
					case 'del':
						$(r_cnt).empty();
						$(compo.cust_remove()).appendTo(r_cnt);
						$('form button[type=submit]').click(e=>{
							e.preventDefault();
							remove(x);
						});
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
		$('#myp').addClass('active');
		});
	};

	return {init : init,
		list : list,
		cust_nav:cust_nav};
})();

/*
* 정보수정
* 회원탈퇴
* 쇼핑몰
* 구매내역
* 장바구니
*/