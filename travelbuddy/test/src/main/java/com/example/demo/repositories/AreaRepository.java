package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.pojos.Area;

@Repository
public interface AreaRepository extends JpaRepository<Area, Integer> {
	@Query("select a.pincode from Area a where a.pincode=:pin")
    int existsAreaByPin(@Param (value="pin")int pincode);
	
	@Query("select a from Area a where a.pincode=:pin")
    Area getAreaByPin(@Param (value="pin")int pincode);
}
