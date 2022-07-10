package com.builtinproject.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity(name= "tbl_user")
@Data
public class User {
	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	 @Column(name="user_id")
	private Integer userId;
	 @Column(name="user_name")
	 private String userName;
	 @Column(name="email_iD")
	 private String emailId;
	 @Column(name="user_id")
	 private Integer age;




}
