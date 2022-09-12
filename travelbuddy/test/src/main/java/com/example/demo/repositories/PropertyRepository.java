package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.dto.PropertyDetailsDTO;
import com.example.demo.pojos.PropertyDetails;

public interface PropertyRepository extends JpaRepository<PropertyDetails, Integer> {
	@Query("select p from PropertyDetails p  join fetch p.areaData a")
    List<PropertyDetailsDTO> getAllPropertList();

}
