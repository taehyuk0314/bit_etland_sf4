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
import com.bit_etland.web.cmm.ISupplier;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Proxy;
import com.bit_etland.web.cmm.Users;


@RestController
public class CustController {
	
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	@Autowired Customer cust;
	@Autowired PrintService ps;
	@Autowired CustomerMapper custMap;
	@Autowired Map<String, Object> map;
	@Autowired Users<?> user;
	@Autowired Proxy pxy;
	
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
		@GetMapping("/customers/page/{page}")
		public Map<?,?> list(){
			logger.info("----------list진입------------");
			map.clear();
			//page_num  page_size block_size
			map.put("page_num", "1");
			map.put("page_size", "5");
			map.put("block_size", "5");
			map.put("rowCount", "10");;
			pxy.carryOut(map);
			IFunction i = (Object o) -> custMap.selectCustomers(pxy);
			List<?> ls = (List<?>) i.apply(pxy);
//			ISupplier i =() ->custMap.selectCustomerList();
			ps.accept("리스트::"+ls);
			map.clear();
			map.put("ls", ls);
			map.put("pxy", pxy);
			return map;
		}
		
				
		
	@PostMapping("/customers")
	public Map<?, ?> join(
			@RequestBody Customer param) {
		logger.info("----------cust진입------------");
		IConsumer i = (Object o) -> custMap.insertCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};
		
	@PutMapping("/customers/update")
	public Map<?, ?> update(
			@RequestBody Customer param) {
		logger.info("----------업데이트진입------------");
		System.out.println(param.toString());
		IConsumer i = (Object o) -> custMap.updateCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};
		
	@DeleteMapping("/customers/delete")
	public Map<?, ?> delete(
			@RequestBody Customer param) {
		logger.info("----------delete진입------------");
		IConsumer i = (Object o) -> custMap.deleteCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};	
}
