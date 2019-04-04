package com.bit_etland.web.supp;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;
import com.bit_etland.web.prod.Product;


@Repository 
public interface SupplierMapper {
	public void insertSupplier(Supplier supp);
	public List<Supplier> selectSuppliersList(Map<?,?> map);
	public List<?> selectSuppliers(Proxy pxy);
	public Supplier selectSupplier(Supplier supp);
	public int countSuppliers();
	public boolean existSupplier(Supplier supp);
	public void updateSupplier(Supplier supp);
	public void deleteSupplier(Supplier supp);
	public String txSupplier(String supplierName);
}
