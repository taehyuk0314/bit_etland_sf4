var ctx = "${ctx}";
$('.page').click(()=>{
	location.assign(
			ctx + '/customer.do?cmd=cust_list&page=list&page_num='+$(this).text());
});
$('#cate_register').click(()=>{
	$('#cate_side_menu > li').attr('style','background-color: white');
	$('#cate_register').attr('style','background-color: #18e455');
	$('#content').html('<form id="form">'
			+'  <div class="form-group">'
			+'    <label for="text">카테고리 이름:</label>'
			+'    <input type="text" class="form-control" name="cate_name">'
			+'  </div>'
			+'  <div class="form-group">'
			+'    <label for="text">상세 설명 :</label>'
			+'    <textarea rows="4" cols="50" class="form-control" name="description"></textarea>'
			+'  </div>'
			+'  <button type="submit" class="btn btn-default">Submit</button>'
			+'</form>');
});
$('#cate_search').click(()=>{
	$('#cate_side_menu > li').attr('style','background-color: white');
	$('#cate_search').attr('style','background-color: #18e455');
	$('#content').html('<form id="form">'
			+'  <div class="form-group">'
			+'    <label for="text">카테고리 검색:</label>'
			+'    <select>'
			+'    	 <option name="cate_id" value="1000">스마트폰</option>'
			+'    	 <option name="cate_id" value="1001">데스크톱</option>'
			+'    	 <option name="cate_id" value="1002">노트북</option>'
			+'    <select>'
			+'  <button type="submit" class="btn btn-default">Submit</button>'
			+'</form>');
});


 $('#cate_modify').click(()=>{
		$('#cate_side_menu > li').attr('style','background-color: white');
		$('#cate_modify').attr('style','background-color: #18e455');
		$('#content').html( '<h2>카테고리 수정 </h2>'
				+'<form action="">'
	            +'    <input type="radio" name="vehicle" value="Bike"  checked> 스마트폰 <br>'
	            +'     <input type="radio" name="vehicle" value="Car"> 데스크탑 <br>'
	            +'     <input type="radio" name="vehicle" value="Boat"> 노트북 <br>'
	            +'  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">수정하기 </button>'
	            +'  <div class="modal fade" id="myModal" role="dialog">'
	            +'    <div class="modal-dialog">'
	            +'      <div class="modal-content">'
	            +'        <div class="modal-header">'
	            +'          <button type="button" class="close" data-dismiss="modal">&times;</button>'
	            +'          <h3>수정 화면</h3>'
	            +'        </div>'
	            +'        <div class="modal-body">'
	            +'          수정할 이름 <br/><input type="text" name="vehicle"/><br/><br/>'
	            +'          수정할 내용 <br/><textarea class="form-control" rows="5" id="comment"></textarea>'
	            +'        </div> <br />'
	            +'        <div class="modal-footer">'
	            +'          <button type="button" class="btn btn-default" data-dismiss="modal">수정하기</button>'
	            +'        </div>'
	            +'      </div>'
	            +'    </div>'
	            +'</form>');
	});