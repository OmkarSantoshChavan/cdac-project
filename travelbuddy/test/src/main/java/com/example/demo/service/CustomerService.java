package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dto.BookPropertyDTO;
import com.example.demo.dto.PropertyDetailsDTO;
import com.example.demo.pojos.Booking;
import com.example.demo.pojos.Payment;
import com.example.demo.pojos.PropertyDetails;
import com.example.demo.pojos.Users;
import com.example.demo.repositories.BookingRepository;
import com.example.demo.repositories.PaymentRepository;
import com.example.demo.repositories.PropertyRepository;
import com.example.demo.repositories.UserRepository;

@Service
public class CustomerService {
	@Autowired
	PropertyRepository prepo;
	@Autowired
	BookingRepository brepo;
	@Autowired
	PaymentRepository payrepo;
	@Autowired
	UserRepository urepo;

	public List<Booking> getBookings(int pid) {
		return brepo.getBookings(pid);
	}
	
	public String bookProperty(int userid, BookPropertyDTO bprop) {
		Users u=urepo.getUser(userid);
		PropertyDetails pd=prepo.getProperty(bprop.getPid());
		Booking b=new Booking(bprop.getBooking_date(), bprop.getFrom_date(), bprop.getTill_date(), bprop.getTotal_amt());
		b.setUserData(u);
		b.setPropertyData(pd);
		brepo.save(b);
		
		Payment pay=new Payment(bprop.getAmount(),bprop.getPmode(),bprop.getPtype());
		pay.setBookingData(b);
		payrepo.save(pay);
		
		return "Property booked successfully";
	}

}
