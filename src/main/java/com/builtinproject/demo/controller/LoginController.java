package com.builtinproject.demo.controller;

import com.builtinproject.demo.bean.LocalBusinessRegistrationEntity;
import com.builtinproject.demo.repo.LocalBusinessRegistrationRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {

    private LocalBusinessRegistrationRepository _localRegistrationRepository;

    public LoginController(LocalBusinessRegistrationRepository localRegistrationRepository){
        _localRegistrationRepository = localRegistrationRepository;
    }

    @PostMapping()
    public ResponseEntity verifyUser(@RequestParam String username){
        LocalBusinessRegistrationEntity validUser = _localRegistrationRepository.getLocalBusinessRegistrationEntityByEmail(username);
       if(validUser== null)
           return ResponseEntity.notFound().build();
        return  ResponseEntity.ok(validUser);
    }

    //

}
