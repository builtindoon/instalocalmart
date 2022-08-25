package com.builtinproject.demo;
import javax.persistence.*;
@Entity


public class Person {
	 @Id
	    @GeneratedValue
	    private int id;
	    private String name;
	    private int age;
	    private String emailId;
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmailId() {
			return emailId;
		}
		public void setEmailId(String emailId) {
			this.emailId = emailId;
		}
		public int getAge() {
			return age;
		}
		public void setAge(int age) {
			this.age = age;
		}

	    // Getters and setters
	   
}
