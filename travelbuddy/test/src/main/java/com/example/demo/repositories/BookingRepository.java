package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.pojos.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
	@Query(value="select * from Booking b where pid=pid and from_date>CURDATE()",nativeQuery=true)
	List<Booking> getBookings(@Param("pid") int pid );
}
