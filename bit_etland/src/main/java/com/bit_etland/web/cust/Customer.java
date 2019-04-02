package com.bit_etland.web.cust;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Customer {
	private String 
				   customerID,
				   customerName,
				   password,
				   ssn,// 900101-1
				   photo,
				   phone,
				   city,
				   address,
				   postalCode
				   ;

}
