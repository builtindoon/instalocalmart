package com.builtinproject.demo.controller;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.builtinproject.demo.bean.Product;
import com.builtinproject.demo.bean.Client;
import com.builtinproject.demo.bean.LocalBusinessRegistrationEntity;
import com.builtinproject.demo.repo.ProductRepository;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	private ProductRepository productRepository;

	public ProductController(ProductRepository productRepository) {
		super();
		this.productRepository = productRepository;
	}
	
	@PostMapping
    public ResponseEntity product(@RequestBody Product product) throws URISyntaxException {
		Product product1 = productRepository.save(product);
        return ResponseEntity.created(new URI("/local/" + product.getId())).body(product);
  }
	
	@GetMapping
    public List<Product> getProducts() {
        return productRepository.findAll();
    }
}
