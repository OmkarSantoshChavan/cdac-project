package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.pojos.PropertyDetails;

@Repository
public interface PropertyRepository extends JpaRepository<PropertyDetails, Integer> {

}
