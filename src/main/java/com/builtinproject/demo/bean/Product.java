package com.builtinproject.demo.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "add_products_goods")
public class Product {
	@Id
    @GeneratedValue
    private Long id;
	private String productCategory;
	private String shopName;
	private String productName;
	private String productBrand;
	private String productQuantity;
	private String productPrice;
	
		
}
