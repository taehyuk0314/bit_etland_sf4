package com.bit_etland.web.supp;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Supplier {
	private String supplierID,
	supplierName
	,contactName
	,address
	,city
	,postalCode
	,country
	,phone;
}
