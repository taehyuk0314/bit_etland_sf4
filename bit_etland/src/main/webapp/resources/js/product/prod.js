var prod = prod ||{}
prod =(()=>{
	let _,js,compojs,r_cnt,l_cnt;
	let path =()=>{
		_= $.ctx();
		js= $.js();
		compojs =js + '/component/compo.js';
		r_cnt = '#right_content';
		l_cnt = '#left_content';
	};
	let init =()=>{
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		$.getScript(compojs,()=>{
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
	let regist =()=>{
		path();
		$(r_cnt).empty();
		$(compo.prod_register()).appendTo(r_cnt);
		$('#prd_post_btn').click(e=>{
			e.preventDefault();
			let freebies =[];
			$('.checks:checked').each(function(i){
				freebies.push($(this).val());
			});
			
			let pname = $('#product_name').val();
			let price = $('#price').val();
			let unit = $('#unit').val();
			if($.fn.nullChecker([pname,price])){
				alert('상품명을 입력해주세요');
			}else{
				alert('널이아니다');
			}
			
			
			let data ={categoryID:$('#category_id').val(),
							productName:pname,
							price:price,
							unit:unit,
							supplierID:$('#supplier_name').val(),
							color:$('input[name=color]:checked').val(),
							freebies:freebies,
							comment:$('#comment').text()
			};
			$.ajax({
				url:_+'/phones',
				type:'post',
				data:JSON.stringify(data),
				dataType:'json',
				contentType:'application/json',
				success:d=>{
					alert('등록');
				},
				error: e=>{
					alert('에러');
				}
			});
		});
	};
	let list =(x)=>{
		path();
		$(r_cnt).empty();
		$.getScript(compojs,()=>{
			$(compo.prod_list()).appendTo(r_cnt);
			$.getJSON(_+'/Products/page/'+x,d=>{
				$.each(d.ls,(i,j)=>{
					$('<tr> <td>'+j.rnum+'</td>'
							+'<td>'+j.productID+'</td>'
							+'<td>'+j.productName+'</td>'
							+'<td>'+j.supplierID+'</td>'
							+'<td>'+j.categoryID+'</td>'
							+'<td>'+j.unit+'</td>'
							+'<td>'+j.price+'</td>'
							+'<td>'+j.photo+'</td> </tr>')
					.appendTo('#cust_tab');
				});
				$('<div style="height: 50px" id="content_1"></div>')
				.appendTo('#content_2');

				let html ='<div class="center"> <div class="pagination">';
				html +='</div></div>';
				$(html).appendTo('#content_2');
				if(d.pxy.existPrev){
					$('<a>&laquo;</a>').appendTo('.pagination')
					.click(function(){
						list(d.pxy.prevBlock);
					});
				}
				let i=0;
				for(i=d.pxy.startPage;i<=d.pxy.endPage;i++){
					if(d.pxy.pageNum ==i){
						$('<a class=page active>'+i+'</a>')
						.appendTo('.pagination')
						.click(function(){
							alert('클릭한 페이지: '+i);
							list($(this).text());
						});
					}else{
						$('<a class=page>'+i+'</a>')
						.appendTo('.pagination')
						.click(function(){
							alert('클릭한 페이지: '+i);
							list($(this).text());
						});
					}
				}
				if(d.pxy.existNext){
					$('<a>&raquo;</a>').appendTo('.pagination')
					.click(function(){
						list(d.pxy.nextBlock);
					});
					
				};
			});
			
			});

	};
	let search =(x)=>{

		path();
		alert("????태혁이 바보 "+x.srch);
		$(r_cnt).empty();
		$.getScript(compojs,()=>{
			$(compo.prod_search()).appendTo(r_cnt);
			$.getJSON(_+'/Products/'+x.srch+'/'+x.page, d=>{
				$.each(d.ls,(i,j)=>{
					$('<tr> <td>'+j.rnum+'</td>'
							+'<td>'+j.productID+'</td>'
							+'<td>'+j.productName+'</td>'
							+'<td>'+j.supplierID+'</td>'
							+'<td>'+j.categoryID+'</td>'
							+'<td>'+j.unit+'</td>'
							+'<td>'+j.price+'</td> </tr>')
					.appendTo('#cust_tab');
				});
				$('<div style="height: 50px" id="content_1"></div>')
				.appendTo('#content_2');

				let html ='<div class="center"> <div class="pagination">';
				html +='</div></div>';
				$(html).appendTo('#content_2');
				if(d.pxy.existPrev){
					$('<a>&laquo;</a>').appendTo('.pagination')
					.click(function(){
						list(d.pxy.prevBlock);
					});
				}
				let i=0;
				for(i=d.pxy.startPage;i<=d.pxy.endPage;i++){
					if(d.pxy.pageNum ==i){
						$('<a class=page active>'+i+'</a>')
						.appendTo('.pagination')
						.click(function(){
							alert('클릭한 페이지: '+i);
							let arr = {srch:x.srch,
									page:$(this).text()}
							search(arr);
						});
					}else{
						$('<a class=page>'+i+'</a>')
						.appendTo('.pagination')
						.click(function(){
							alert('??태혁 페이지: '+i);
							let arr1 = {srch:x.srch,
									page:$(this).text()}
							search(arr1);
						});
					}
				}
				if(d.pxy.existNext){
					$('<a>&raquo;</a>').appendTo('.pagination')
					.click(function(){
						list(d.pxy.nextBlock);
					});
					
				};


			});
		});
	};
	return {init : init,
		list : list,
		regist : regist,
		search : search};
})();
