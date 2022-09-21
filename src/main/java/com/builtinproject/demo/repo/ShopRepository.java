package com.builtinproject.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.builtinproject.demo.bean.AddLocalShop;
import com.builtinproject.demo.bean.Shop;

public interface ShopRepository extends JpaRepository<Shop, Long> {

}
