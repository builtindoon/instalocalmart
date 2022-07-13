package com.builtinproject.demo.repo;

import com.builtinproject.demo.bean.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
