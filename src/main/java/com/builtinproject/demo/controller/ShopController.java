package com.builtinproject.demo.controller;


import com.builtinproject.demo.bean.Shop;
import com.builtinproject.demo.repo.ShopRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("shops")
@CrossOrigin(origins = "http://localhost:3000")
public class ShopController {

    private final ShopRepository shopRepository;

    public ShopController(ShopRepository shopRepository) {
        this.shopRepository = shopRepository;
    }

    @GetMapping
    public List<Shop> getShops() {
        return shopRepository.findAll();
    }

    @GetMapping("/{id}")
    public Shop getShop(@PathVariable Long id) {
        return shopRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createShop(@RequestBody Shop shop) throws URISyntaxException {
        Shop savedshop = shopRepository.save(shop);
        return ResponseEntity.created(new URI("/shops/" + savedshop.getId())).body(savedshop);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateShop(@PathVariable Long id, @RequestBody Shop shop) {
        Shop currentshop = shopRepository.findById(id).orElseThrow(RuntimeException::new);
        currentshop.setShopName(shop.getShopName());
        currentshop = shopRepository.save(shop);
        return ResponseEntity.ok(currentshop);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteShop(@PathVariable Long id) {
        shopRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
