package com.builtinproject.demo.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.builtinproject.demo.bean.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {


}
