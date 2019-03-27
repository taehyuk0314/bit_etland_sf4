package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;


@Repository
public interface ProductMapper {
	public void insertProduct(Product pro);
	public List<Product> selectProductsList(Map<?,?> map);
	public List<Product> selectProducts(Map<?,?> map);
	public Product selectProduct(Product pro);
	public int countProducts(Map<?,?> map);
	public boolean existProduct(Product pro);
	public void updateProduct(Product pro);
	public void deleteProduct(Product pro);
}
