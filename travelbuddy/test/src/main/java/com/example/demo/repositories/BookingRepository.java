package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.pojos.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
//	@Query("select b from Booking b where b.pid=:pid and b.from_date>:date")
//    List<Booking> getAllBookings(@Param("pid") int id );
}
