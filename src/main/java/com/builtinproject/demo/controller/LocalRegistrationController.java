package com.builtinproject.demo.controller;

import com.builtinproject.demo.bean.LocalBusinessRegistrationEntity;
import com.builtinproject.demo.repo.LocalBusinessRegistrationRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/local")
@CrossOrigin(origins = "http://localhost:3000")
public class LocalRegistrationController {

    private LocalBusinessRegistrationRepository _localBusinessRegistrationRepository;

    public LocalRegistrationController(LocalBusinessRegistrationRepository localBusinessRegistrationRepository){
        _localBusinessRegistrationRepository = localBusinessRegistrationRepository;
    }

    @GetMapping
    public List<LocalBusinessRegistrationEntity> getAllRegistration(){
        return _localBusinessRegistrationRepository.findAll();
    }
//    @GetMapping("/{id}")
//    public LocalBusinessRegistrationEntity getRegisteredUser(@PathVariable Long id){
//        return _localBusinessRegistrationRepository.findById(id).orElseThrow(RuntimeException::new);
//    }
    
    @GetMapping("/{email}")
    public ResponseEntity<LocalBusinessRegistrationEntity> getRegisteredUserEmail(@PathVariable String email) {
    	LocalBusinessRegistrationEntity obj = _localBusinessRegistrationRepository.findByEmail(email);
    	if(obj==null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    	else return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    
    @PostMapping
    public ResponseEntity registerLocalUser(@RequestBody LocalBusinessRegistrationEntity localBusinessRegistrationEntity) throws URISyntaxException {
        LocalBusinessRegistrationEntity registrationEntity = _localBusinessRegistrationRepository.save(localBusinessRegistrationEntity);
        return ResponseEntity.created(new URI("/local/" + registrationEntity.getId())).body(registrationEntity);
    }
    @PutMapping("/{id}")
    public ResponseEntity updateLocalUser(@PathVariable Long id,@RequestBody LocalBusinessRegistrationEntity localBusinessRegistrationEntity){
        LocalBusinessRegistrationEntity updateRegistration = _localBusinessRegistrationRepository.findById(id).orElseThrow(RuntimeException::new);
        updateRegistration.setFirstName(localBusinessRegistrationEntity.getFirstName());
        updateRegistration.setFirstName(localBusinessRegistrationEntity.getFirstName());
        updateRegistration.setAddress(localBusinessRegistrationEntity.getAddress());
        updateRegistration.setCity(localBusinessRegistrationEntity.getCity());
        updateRegistration.setDistrict(localBusinessRegistrationEntity.getDistrict());
        updateRegistration.setEmail(localBusinessRegistrationEntity.getEmail());
        updateRegistration.setPinCode(localBusinessRegistrationEntity.getPinCode());
        updateRegistration.setPassword(localBusinessRegistrationEntity.getPassword());
        updateRegistration.setState(localBusinessRegistrationEntity.getState());
        return ResponseEntity.ok(_localBusinessRegistrationRepository.save(localBusinessRegistrationEntity));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity deleteLocalUser(@PathVariable Long id){
        _localBusinessRegistrationRepository.findById(id).orElseThrow(RuntimeException::new);
        _localBusinessRegistrationRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
