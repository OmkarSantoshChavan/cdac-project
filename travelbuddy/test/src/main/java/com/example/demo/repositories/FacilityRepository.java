package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.pojos.Facilities;

@Repository
public interface FacilityRepository extends JpaRepository<Facilities, Integer> {

}
