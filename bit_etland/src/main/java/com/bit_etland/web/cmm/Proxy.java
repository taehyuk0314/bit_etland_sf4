package com.bit_etland.web.cmm;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component @Data @Lazy
public class Proxy {
	private int pageNum, pageSize, blockSize, startRow, endRow, startPage, endPage, prevBlock, nextBlock,rowCount,pageCount,blockNum;
	private boolean existPrev,existNext;

		public void carryOut(Map<?,?> paraMap) {

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
		}
