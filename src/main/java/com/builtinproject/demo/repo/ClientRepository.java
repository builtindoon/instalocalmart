package com.builtinproject.demo.repo;

import com.builtinproject.demo.client.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
