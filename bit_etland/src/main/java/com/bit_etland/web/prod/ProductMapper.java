package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;


@Repository
public interface ProductMapper {
	public void insertProduct(Product prod);
	public List<?> selectProductsList(Proxy pxy);
	public List<?> selectProducts(Proxy pxy);
	public Product selectProduct(Product prod);
	public int countProducts();
	public int searchCountProducts(String search);
	public boolean existProduct(Product prod);
	public void updateProduct(Product prod);
	public void deleteProduct(Product prod);
}
