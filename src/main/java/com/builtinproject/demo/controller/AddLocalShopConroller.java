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

import com.builtinproject.demo.bean.AddLocalShop;
import com.builtinproject.demo.bean.LocalBusinessRegistrationEntity;
import com.builtinproject.demo.bean.Shop;
import com.builtinproject.demo.repo.AddLocalShopRepository;

@RestController
@RequestMapping("/localshop")
@CrossOrigin(origins = "http://localhost:3000")
public class AddLocalShopConroller {
	private AddLocalShopRepository addLocalShopRepository;

	public AddLocalShopConroller(AddLocalShopRepository addLocalShopRepository) {
		super();
		this.addLocalShopRepository = addLocalShopRepository;
	}
	
	@PostMapping
    public ResponseEntity addLocalShop(@RequestBody AddLocalShop addLocalShop) throws URISyntaxException {
		AddLocalShop addLocalShop1 = addLocalShopRepository.save(addLocalShop);
        return ResponseEntity.created(new URI("/local/" + addLocalShop1.getId())).body(addLocalShop1);
    }
	
	@GetMapping
    public List<AddLocalShop> getShops() {
        return addLocalShopRepository.findAll();
    }
}
