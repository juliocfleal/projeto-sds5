package com.julioleal.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.julioleal.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
