package com.builtinproject.demo;


import org.springframework.data.jpa.repository.JpaRepository;

public interface  UserRepositry extends JpaRepository<User, Integer> {

}
