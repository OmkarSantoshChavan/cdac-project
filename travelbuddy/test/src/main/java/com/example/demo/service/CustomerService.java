package com.example.demo.service;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.customexception.ResourceNotFoundException;
import com.example.demo.dto.BookPropertyDTO;
import com.example.demo.dto.BookingDetailsDTO;
import com.example.demo.dto.DateValidateDTO;
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

	public List<BookingDetailsDTO> getBookings(int pid) {
		return brepo.getBookings(pid);
	}
	
	public boolean dateValidate(int pid,DateValidateDTO d) throws ParseException {
		boolean flag=true;
		
		Date d1=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(d.getFrom_date());
		Date d2=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(d.getTill_date());
		Timestamp checkin=new Timestamp(d1.getTime());
		Timestamp checkout=new Timestamp(d2.getTime());
		
		List<BookingDetailsDTO> bdata=brepo.getBookings(pid);
		for(BookingDetailsDTO b:bdata) {
			Date d3=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(b.getFrom_date());
			Date d4=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(b.getTill_date());
			Timestamp t1=new Timestamp(d3.getTime());
			Timestamp t2=new Timestamp(d4.getTime());
			
			if((t1.compareTo(checkin)<=0)&&(checkin.compareTo(t2)<=0)) {
				flag=false;
			}
			if((t1.compareTo(checkout)<=0)&&(checkout.compareTo(t2)<=0)) {
				flag=false;
			}
		}
		return flag;
	}
	
	public String bookProperty(int userid, BookPropertyDTO bprop){
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
