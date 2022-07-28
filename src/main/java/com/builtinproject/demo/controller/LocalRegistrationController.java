package com.builtinproject.demo.controller;

import com.builtinproject.demo.bean.LocalBusinessRegistrationEntity;
import com.builtinproject.demo.repo.LocalBusinessRegistrationRepository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/local")
public class LocalRegistrationController {

    private LocalBusinessRegistrationRepository _localBusinessRegistrationRepository;

    public LocalRegistrationController(LocalBusinessRegistrationRepository localBusinessRegistrationRepository){
        _localBusinessRegistrationRepository = localBusinessRegistrationRepository;
    }

    @GetMapping
    public List<LocalBusinessRegistrationEntity> getAllRegistration(){
        return _localBusinessRegistrationRepository.findAll();
    }
    @GetMapping("/{id}")
    public LocalBusinessRegistrationEntity getRegisteredUser(@PathVariable Long id){
        return _localBusinessRegistrationRepository.findById(id).orElseThrow(RuntimeException::new);
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
        //TODO for all the fields

        return ResponseEntity.ok(_localBusinessRegistrationRepository.save(localBusinessRegistrationEntity));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity deleteLocalUser(@PathVariable Long id){
        _localBusinessRegistrationRepository.findById(id).orElseThrow(RuntimeException::new);
        _localBusinessRegistrationRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
