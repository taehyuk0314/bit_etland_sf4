package com.bit_etland.web.cmm;

import java.io.File;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.FileItemFactory;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import org.apache.tomcat.util.http.fileupload.servlet.ServletRequestContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component @Data @Lazy
public class Proxy {
	private int pageNum, pageSize, blockSize, startRow, endRow, startPage, endPage, prevBlock, nextBlock,rowCount,pageCount,blockNum;
	private boolean existPrev,existNext;
	private String search;

		public void carryOut(Map<?,?> paraMap) {
		search = (String) paraMap.get("search");
		String _pageNum = (String)paraMap.get("page_num");
		pageNum = (_pageNum == null) ? 1 : Integer.parseInt(_pageNum);
		String _pageSize = (String)paraMap.get("page_size");
		pageSize = (_pageSize == null) ? 5 : Integer.parseInt(_pageSize);
		String _blockSize = (String)paraMap.get("block_size");
		blockSize = (_blockSize == null) ? 5 : Integer.parseInt(_blockSize);
		rowCount = (int) paraMap.get("rowCount");
		
		
		
		int nmg = rowCount % pageSize;
		int pageCount = (nmg == 0)?rowCount / pageSize:rowCount / pageSize+1;
		startRow = (pageNum -1) *pageSize;
		System.out.println("스타트로우: "+startRow);
		endRow = (rowCount > pageNum * pageSize)? pageNum * pageSize: rowCount;
		

		blockNum = (pageNum-1)/blockSize;
		if(existPrev) {
			startPage = blockNum*blockSize+1;
			
		}else {
			startPage = 1;
		}
		
		startPage = pageNum -((pageNum-1)%blockSize);
		endPage = startPage+(blockSize-1);

		if(endPage>pageCount) {
			endPage = pageCount;
		}
		
		existPrev = (startPage - pageSize) > 0;
		existNext = (startPage + pageSize) <= pageCount;
		prevBlock = startPage - pageSize; 
		nextBlock = endPage + 1;
		System.out.println("스타트페이지 "+startPage);
		System.out.println("엔드페이지 "+endPage);
		System.out.println("스타트로우 "+startRow);
		System.out.println("엔드로우 "+endRow);
		System.out.println("페이지사이즈 "+pageSize);
		System.out.println("블록사이즈 "+blockSize);
		System.out.println("페이지넘버 "+pageNum);
		System.out.println("로우카운트 "+rowCount);
		}
		
		@Autowired Image img;
		public void fileUpload(String customerID) {
			FileItemFactory factory = new DiskFileItemFactory();
			ServletFileUpload upload = new ServletFileUpload(factory);
			upload.setFileSizeMax(1024 * 1024 * 40); //40 MB
			upload.setSizeMax(1024 * 1024 * 50); //50 MB
			List<FileItem> items =null;
			try {
				File file= null;
//				items = upload.parseRequest(new ServletRequestContext(request));
				Iterator<FileItem> it = items.iterator();
				while(it.hasNext()) {
					FileItem item = it.next();
					if(!item.isFormField()) {
						String fileName = item.getName();
						file = new File(""+fileName);
						item.write(file);
						img = new Image();
						System.out.println("파일명: "+fileName.substring(0,fileName.indexOf(".")));
						img.setImgName(fileName.substring(0,fileName.indexOf(".")));
						System.out.println("확장자:  "+fileName.substring(fileName.indexOf(".")+1));
		                img.setImgExtention(fileName.substring(fileName.indexOf(".")+1));
						img.setOwner(customerID);
						//DB 에 입력하기
						
					}
				}
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		}
