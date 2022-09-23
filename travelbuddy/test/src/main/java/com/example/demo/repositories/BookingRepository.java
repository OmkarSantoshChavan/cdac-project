package com.example.demo.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.BookingDetailsDTO;
import com.example.demo.pojos.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
	@Query("select b from Booking b join fetch b.propertyData p where p.pid=:pid")
	List<BookingDetailsDTO> getBookings(@Param("pid") int pid );
}
