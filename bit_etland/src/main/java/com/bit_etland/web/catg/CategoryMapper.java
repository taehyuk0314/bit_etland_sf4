package com.bit_etland.web.catg;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;
import com.bit_etland.web.supp.Supplier;


@Repository 
public interface CategoryMapper {
	public void insertCategory(Category catg);
	public List<Category> selectCategorysList(Map<?,?> map);
	public List<?> selectCategorys(Proxy pxy);
	public Category selectCategory(Category catg);
	public int countCategorys();
	public boolean existCategory(Category catg);
	public void updateCategory(Category catg);
	public void deleteCategory(Category catg);
	public String txCategory(String categoryName);
}
