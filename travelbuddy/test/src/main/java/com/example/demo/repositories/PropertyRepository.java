package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.PropertyDetailsDTO;
import com.example.demo.pojos.PropertyDetails;

@Repository
public interface PropertyRepository extends JpaRepository<PropertyDetails, Integer> {
	@Query("select p from PropertyDetails p  join fetch p.areaData a join fetch p.facilityList join fetch p.ownerData o")
    List<PropertyDetailsDTO> getAllPropertList();
	
	@Query("select p from PropertyDetails p  join fetch p.areaData a join fetch p.facilityList join fetch p.ownerData o where p.id=:pid")
    PropertyDetailsDTO getPropertyDetails(@Param("pid") int id );
	
	@Query("select p from PropertyDetails p where p.id=:pid")
    PropertyDetails getProperty(@Param("pid") int id );
}
