package com.builtinproject.demo.repo;

import com.builtinproject.demo.bean.LocalBusinessRegistrationEntity;
import com.builtinproject.demo.controller.LocalRegistrationController;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocalBusinessRegistrationRepository extends JpaRepository<LocalBusinessRegistrationEntity, Long> {
    public LocalBusinessRegistrationEntity findByEmail(String email);
}
