package com.builtinproject.demo.repo;

import com.builtinproject.demo.localbusiness.LocalBusinessRegistrationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocalBusinessRegistrationRepository extends JpaRepository<LocalBusinessRegistrationEntity, Long> {
}
