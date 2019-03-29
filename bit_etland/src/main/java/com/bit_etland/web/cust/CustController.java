package com.bit_etland.web.cust;




import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;


@RestController
public class CustController {
	
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	@Autowired Customer cust;
	@Autowired PrintService ps;
	@Autowired CustomerMapper custMap;
	@Autowired Map<String, Object> map;
	@Autowired Users<?> user;
	
	@PostMapping("/customers/{userid}")
	public Customer login(
			@PathVariable String userid,
			@RequestBody Customer param) {
		logger.info("----------cust진입------------");
		System.out.println(param.toString());
		IFunction i = (Object o) -> custMap.selectCustomer((Customer)param);
		return (Customer)i.apply(param);			
		};	
		
		
		
		@SuppressWarnings("unchecked")
		@PostMapping("/customers/list")
		public List<Users<?>> list(
				@RequestBody Map<?, ?> param){
			logger.info("----------list진입------------");
			IFunction i = (Object o) -> custMap.selectCustomers(param);
			
//			ps.accept(ls);
			return (List<Users<?>>)i.apply(param);
		}
		
				
		
	@GetMapping("/customers")
	public Map<?, ?> join(
			@RequestBody Customer param) {
		logger.info("----------cust진입------------");
		IConsumer i = (Object o) -> custMap.insertCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};
		
	@PutMapping("/customers/{userid}")
	public Map<String, Object> update(
			@PathVariable String userid,
			@RequestBody Customer param) {
		logger.info("----------cust진입------------");
		IConsumer i = (Object o) -> custMap.updateCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};
		
	@DeleteMapping("/customers/{userid}")
	public Map<String, Object> delete(
			@PathVariable String userid,
			@RequestBody Customer param) {
		logger.info("----------cust진입------------");
		IConsumer i = (Object o) -> custMap.deleteCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};	
}
