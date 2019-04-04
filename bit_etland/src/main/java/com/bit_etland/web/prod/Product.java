package com.bit_etland.web.prod;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Product {
	private String productID,
				   productName,
				   supplierID,
				   categoryID,
				   unit,
				   photo,
				   price,
				   color;
	private List<String> freebies;

	
}