package com.bit_etland.web.catg;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Category {
	private String categoryID,categoryName,description; 
				   
}
