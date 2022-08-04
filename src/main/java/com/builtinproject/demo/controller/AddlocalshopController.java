package com.builtinproject.demo.controller;


import com.builtinproject.demo.bean.Addlocalshop;
import com.builtinproject.demo.repo.AddlocalshopRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("addlocalshop")
public class AddlocalshopController {

    private final AddlocalshopRepository addlocalshopRepository;

    public AddlocalshopController(AddlocalshopRepository addlocalshopRepository) {
        this.addlocalshopRepository = addlocalshopRepository;
    }

    @GetMapping
    public List<Addlocalshop> getAddlocalshop() {
        return addlocalshopRepository.findAll();
    }

    @GetMapping("/{id}")
    public Addlocalshop getAddlocalshop(@PathVariable Long id) {
        return addlocalshopRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createAddlocalshop(@RequestBody Addlocalshop addlocalshop) throws URISyntaxException {
        Addlocalshop savedAddlocalshop = addlocalshopRepository.save(addlocalshop);
        return ResponseEntity.created(new URI("/addlocalshop/" + savedAddlocalshop.getId())).body(savedAddlocalshop);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateAddlocalshop(@PathVariable Long id, @RequestBody Addlocalshop addlocalshop) {
    	 Addlocalshop currentAddlocalshop = addlocalshopRepository.findById(id).orElseThrow(RuntimeException::new);
         currentAddlocalshop.setShopName(addlocalshop.getShopName());
         currentAddlocalshop.setShopAddress(addlocalshop.getShopAddress());
         currentAddlocalshop.setDistrict(addlocalshop.getDistrict());
         currentAddlocalshop.setState(addlocalshop.getState());

         currentAddlocalshop = addlocalshopRepository.save(addlocalshop);

         return ResponseEntity.ok(currentAddlocalshop);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteAddlocalshop(@PathVariable Long id) {
        addlocalshopRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
