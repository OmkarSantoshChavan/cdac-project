package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.pojos.Area;

@Repository
public interface AreaRepository extends JpaRepository<Area, Integer> {
	@Query("select a from Area a where a.pincode=:pin")
    Optional<Area> existsAreaByPin(@Param (value="pin")int pincode);
	
	@Query("select a from Area a where a.pincode=:pin")
    Area getAreaByPin(@Param (value="pin")int pincode);
}
