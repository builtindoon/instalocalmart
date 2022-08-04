package com.builtinproject.demo.bean;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "addlocalshop")

public class Addlocalshop {
	 @Id
	    @GeneratedValue
	    private Long id;

	    private String shopName;
	    private String shopAddress;
	  	private String District;
	    private String State;
	    	 



}
