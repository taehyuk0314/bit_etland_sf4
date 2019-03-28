package com.bit_etland.web.emp;

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
import com.bit_etland.web.cust.CustController;
import com.bit_etland.web.cust.Customer;
import com.bit_etland.web.cust.CustomerMapper;

@RestController
@RequestMapping("/users")
public class EmployeeController {
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	@Autowired Employee emp;
	@Autowired PrintService ps;
	@Autowired EmployeeMapper empMap;
	@Autowired Map<String, Object> map;
	@Autowired Users<?> user;
	
	@PostMapping("/emp/{userid}")
	public Employee access(
			@PathVariable String userid,
			@RequestBody Object param) {
		logger.info("----------cust진입------------");
		IFunction i = (Object o) -> empMap.selectEmployee((Employee)param);
		return (Employee)i.apply(param);			
		};	
		
		
		
		@SuppressWarnings("unchecked")
		@GetMapping("/emp/list")
		public List<Users<?>> list(
				@RequestBody Map<?, ?> param){
			logger.info("----------list진입------------");
			IFunction i = (Object o) -> empMap.selectEmployeeList(param);
			
//			ps.accept(ls);
			return (List<Users<?>>)i.apply(param);
		}
		
				
		
	@GetMapping("/emp")
	public Map<?, ?> register(
			@RequestBody Employee param) {
		logger.info("----------cust진입------------");
		IConsumer i = (Object o) -> empMap.insertEmployee(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};
		
	@PutMapping("/emp/{userid}")
	public Map<String, Object> update(
			@PathVariable String userid,
			@RequestBody Employee param) {
		logger.info("----------cust진입------------");
		IConsumer i = (Object o) -> empMap.updateEmployee(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};
		
	@DeleteMapping("/emp/{userid}")
	public Map<String, Object> delete(

			@PathVariable String userid,
			@RequestBody Employee param) {
		logger.info("----------cust진입------------");
		IConsumer i = (Object o) -> empMap.deleteEmployee(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;			
		};	
}
