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
@Table(name = "add_local_shop")
public class AddLocalShop {
	@Id
    @GeneratedValue
    private Long id;
	private String shopName;
	private String shopAddress;
	private String state;
	private String district;
	private String pincode;
	private String landmark;
	private String deliveryProvided;
	
}
