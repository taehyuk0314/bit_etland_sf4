package com.bit_etland.web.prod;

import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;
import com.bit_etland.web.prod.Product;
import com.bit_etland.web.prod.ProductMapper;

@RestController
public class ProductController {
	
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	@Autowired Product prod;
	@Autowired PrintService ps;
	@Autowired ProductMapper prodMap;
	@Autowired Map<String, Object> map;
	@Autowired Users<?> user;
	
	@PostMapping("/Products/{userid}")
	public Product login(
			@PathVariable String userid,
			@RequestBody Product param) {
		logger.info("----------prod진입------------");
		System.out.println(param.toString());
		IFunction i = (Object o) -> prodMap.selectProduct((Product)param);
		return (Product)i.apply(param);			
		};	
		
		
		
		@SuppressWarnings("unchecked")
		@PostMapping("/Products/list")
		public List<Users<?>> list(
				@RequestBody Map<?, ?> param){
			logger.info("----------list진입------------");
			IFunction i = (Object o) -> prodMap.selectProducts(param);
			
//			ps.accept(ls);
			return (List<Users<?>>)i.apply(param);
		}
		
				
		
	@GetMapping("/Products")
	public Map<?, ?> join(
			@RequestBody Product param) {
		logger.info("----------prod진입------------");
		IConsumer i = (Object o) -> prodMap.insertProduct(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};
		
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