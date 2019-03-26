package com.bit_etland.web.prod;

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
				   price;

	
}