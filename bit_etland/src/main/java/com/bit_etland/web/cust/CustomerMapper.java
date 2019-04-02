package com.bit_etland.web.cust;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;

@Repository
public interface CustomerMapper {
	public void insertCustomer(Customer cust);
	public List<Customer> selectCustomerList(Map<?,?> map);
	public List<?> selectCustomers(Proxy pxy);
	public Customer selectCustomer(Customer cust);
	public int countCustomers(Map<?,?> map);
	public boolean existsCustomerID(Customer cust);
	public void updateCustomer(Customer cust);
	public Map<String, Object> selectProfile(Map<?,?> map);
	public void deleteCustomer(Customer cust);
	public Map<String, Object> selectPhone(Map<?,?> map); 
}
