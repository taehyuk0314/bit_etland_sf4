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
		$("#img_upload_btn").click(function(){
			let ok =(this.fin[0].name.match(/jpg|gif|png|jpeg/i)) ? true : false;
			if(ok){
/*				let fd = new FormData();
				fd.append('file',this.files[0]);*/
				$('#img_upload_frm').attr('action',_+'/phones/file');
				$.ajax({
					url : $('#img_upload_frm').attr('action'),
					type : 'post',
					data : fd,
					dataType : "text",
					enctype : "multipart/form-data",
					beforeSubmit : function(){
						alert('로딩');
					},
					success : b=>{
						alert("파일업로드 성공");
					},
					error : e =>{
						alert("파일업로드 실패");
						
					}
				}).submit();
			}else{
				alert('gif, png, jpg, jpeg 파일만 업로드 할 수 잇습니다');
			}
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
		alert("?? "+x.srch);
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
							alert('??페이지: '+i);
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
				$('#grid_btn').click(e=>{
					let url = _+'/Products/'+x.srch+'/grid/'+x.page;
					e.preventDefault();
					$.getJSON(url,d=>{
						
						$(r_cnt).empty();
						$('  <h2>그리드 리스트</h2>'
							    +'<button id="grid_btn">원상 복귀 보기</button>'
								+'  <div class="row" id="gallery_title">').appendTo(r_cnt);	
						let i =0;
						let table = '';
						$('<div id="grid" />').appendTo(r_cnt);
						for(i=0;i<3;i++){
							$('<div class="row progrid"></div>').append('#grid');
						$.each([1,2,3],(i)=>{
							table += '<div class="col-md-4">'
								+'      <div class="thumbnail">'
								+'        <a href="/w3images/lights.jpg" target="_blank">'
								+'          <img src="http://news.samsungdisplay.com/wp-content/uploads/2019/02/Galaxy_Fold_Keyvisual_contrast.jpg" alt="Lights" style="width:100%">'
								+'          <div class="caption">'
								+'            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>'
								+'          </div>'
								+'        </a>'
								+'      </div>'
								+'    </div>';
						});
						}
						table +='</div></div>';
						$(table).appendTo('#gallery_title');
						
						
					});

				});

			});
		});
	};
	return {init : init,
		list : list,
		regist : regist,
		search : search};
})();
