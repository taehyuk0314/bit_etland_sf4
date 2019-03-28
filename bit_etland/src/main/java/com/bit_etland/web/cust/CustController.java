package com.bit_etland.web.cust;




import java.util.HashMap;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;
import com.bit_etland.web.emp.Employee;
import com.bit_etland.web.emp.EmployeeMapper;


@RestController
@RequestMapping("/users")
public class CustController {
	
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	@Autowired Customer cust;
	@Autowired PrintService ps;
	@Autowired CustomerMapper custMap;
	@Autowired EmployeeMapper empMap;
	@Autowired Map<String, Object> map;
	@Autowired Users<?> user;
	
	@PostMapping("/cust/{userid}")
	public Customer login(
			@PathVariable String user,
			@PathVariable String userid,
			@RequestBody Object param) {
		logger.info("----------cust진입------------");
		IFunction i = (Object o) -> custMap.selectCustomer((Customer)param);
		return (Customer)i.apply(param);			
		};	
		
		
		
		@SuppressWarnings("unchecked")
		@GetMapping("/cust/list")
		public List<Users<?>> list(
				@PathVariable String user,
				@RequestBody Map<?, ?> param){
			logger.info("----------list진입------------");
			IFunction i = (Object o) -> custMap.selectCustomers(param);
			
//			ps.accept(ls);
			return (List<Users<?>>)i.apply(param);
		}
		
				
		
	@GetMapping("/cust")
	public Map<?, ?> join(
			@PathVariable String user,
			@RequestBody Customer param) {
		logger.info("----------cust진입------------");
		IConsumer i = (Object o) -> custMap.insertCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};
		
	@PutMapping("/cust/{userid}")
	public Map<String, Object> update(
			@PathVariable String user,
			@PathVariable String userid,
			@RequestBody Customer param) {
		logger.info("----------cust진입------------");
		IConsumer i = (Object o) -> custMap.updateCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};
		
	@DeleteMapping("/cust/{userid}")
	public Map<String, Object> delete(
			@PathVariable String user,
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
