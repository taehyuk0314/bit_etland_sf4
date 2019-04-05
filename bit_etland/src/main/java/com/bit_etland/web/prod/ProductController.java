package com.bit_etland.web.prod;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bit_etland.web.catg.Category;
import com.bit_etland.web.catg.CategoryMapper;
import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.ISupplier;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Proxy;
import com.bit_etland.web.cmm.Users;
import com.bit_etland.web.supp.Supplier;
import com.bit_etland.web.supp.SupplierMapper;

@RestController
public class ProductController {
	
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	@Autowired Product prod;
	@Autowired Category catg;
	@Autowired Supplier supp;
	@Autowired PrintService ps;
	@Autowired ProductMapper prodMap;
	@Autowired CategoryMapper catgMap;
	@Autowired SupplierMapper suppMap;
	@Autowired Map<String, Object> map;
	@Autowired Users<?> user;
	@Autowired Proxy pxy;
	@Resource(name = "uploadPath")private String uploadPath;
	
	@PostMapping("/Products/{userid}")
	public Product login(
			@PathVariable String userid,
			@RequestBody Product param) {
		logger.info("----------prod진입------------");
		System.out.println(param.toString());
		IFunction i = (Object o) -> prodMap.selectProduct((Product)param);
		return (Product)i.apply(param);			
		};	
		

		@GetMapping("/Products/{search}/{page}")
		public Map<?,?> search(@PathVariable String search,
				@PathVariable String page){
		map.clear();
		System.out.println(page);
		System.out.println("검색리스트");
		logger.info("----------검색 리스트------------");
		System.out.println(search);
		String srh = "%"+search+"%";
		ISupplier sup = () -> prodMap.searchCountProducts(srh);
		System.out.println("총 계수"+sup.get());
		map.put("page_num", page);
		map.put("page_size", "5");
		map.put("block_size", "5");
		map.put("rowCount", sup.get());
		map.put("search", srh);
		pxy.carryOut(map);
		IFunction i = (Object o) -> prodMap.selectProductsList((Proxy) o);
		System.out.println(pxy.getSearch());
		List<?> ls = (List<?>) i.apply(pxy);	
		ps.accept("리스트::"+ls);
		map.clear();
		map.put("ls", ls);
		map.put("pxy", pxy);
		return map;	
		}
		@GetMapping("/Products/{search}/grid/{page}")
		public Map<?,?> grid(@PathVariable String search,
				@PathVariable String page){
		map.clear();
		System.out.println(page);
		logger.info("----------그리드 리스트------------");
		System.out.println(search);
		String srh = "%"+search+"%";
		ISupplier sup = () -> prodMap.searchCountProducts(srh);
		System.out.println("총 계수"+sup.get());
		map.put("page_num", page);
		map.put("page_size", "9");
		map.put("block_size", "5");
		map.put("rowCount", sup.get());
		map.put("search", srh);
		pxy.carryOut(map);
		IFunction i = (Object o) -> prodMap.selectProductsList((Proxy) o);
		System.out.println(pxy.getSearch());
		List<?> ls = (List<?>) i.apply(pxy);	
		ps.accept("리스트::"+ls);
		map.clear();
		map.put("ls", ls);
		map.put("pxy", pxy);
		return map;	
		}
		
		@SuppressWarnings("unchecked")
		@GetMapping("/Products/page/{page}")
		public Map<?,?> list(
				@PathVariable String page){
			map.clear();
			logger.info("----------prod 리스트------------");
			//page_num  page_size block_size
			System.out.println(page);
			map.put("page_num", page);
			map.put("page_size", "5");
			map.put("block_size", "5");
			ISupplier sup =()->prodMap.countProducts();
			map.put("rowCount", sup.get());
			pxy.carryOut(map);
			IFunction i = (Object o) -> prodMap.selectProducts(pxy);
			List<?> ls = (List<?>) i.apply(pxy);
			ps.accept("리스트::"+ls);
			map.clear();
			map.put("ls", ls);
			map.put("pxy", pxy);
			return map;
		}
		
				
	@Transactional	
	@PostMapping("/phones")
	public Map<?, ?> regist(
			@RequestBody Product param) {
		logger.info("----------prod 상품등록진------------");
		List<String> ls = prod.getFreebies();
		ps.accept("리스트:: "+ls);
		ps.accept("리스트:: "+param.toString());
		
		IFunction i1 = s -> catgMap.txCategory((String)s);
		IFunction i2 = s -> suppMap.txSupplier((String)s);
		System.out.println(param.getCategoryID());
		System.out.println(param.getSupplierID());
		String cateID = (String) i1.apply(param.getCategoryID()); //name
		String suppID = (String) i2.apply(param.getSupplierID()); //name
		System.out.println(cateID);
		System.out.println(suppID);
		param.setCategoryID(cateID);
		param.setSupplierID(suppID);
		IConsumer i = o -> prodMap.insertProduct((Product)o);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};
	@RequestMapping(value="/phone/file" , method=RequestMethod.POST)
	public Map<?, ?> fileUpload(MultipartHttpServletRequest req)throws Exception{
		Iterator<String> it = req.getFileNames();
		if(it.hasNext()) {
			MultipartFile mf = req.getFile(it.next());
			ps.accept("넘어온 파일명"+mf.getName());
		}
		ps.accept("넘어온 파일명"+uploadPath);
		return map;
	}
		
	@PutMapping("/Products/{userid}")
	public Map<String, Object> update(
			@PathVariable String userid,
			@RequestBody Product param) {
		logger.info("----------prod진입------------");
		IConsumer i = (Object o) -> prodMap.updateProduct(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};
		
	@DeleteMapping("/Products/{userid}")
	public Map<String, Object> delete(
			@PathVariable String userid,
			@RequestBody Product param) {
		logger.info("----------prod진입------------");
		IConsumer i = (Object o) -> prodMap.deleteProduct(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};	
}