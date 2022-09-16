package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.AddPropertyDTO;
import com.example.demo.pojos.Area;
import com.example.demo.pojos.Facilities;
import com.example.demo.pojos.PropertyDetails;
import com.example.demo.pojos.Users;
import com.example.demo.repositories.AreaRepository;
import com.example.demo.repositories.FacilityRepository;
import com.example.demo.repositories.PropertyRepository;
import com.example.demo.repositories.UserRepository;

@Service
public class OwnerService {
	@Autowired
	AreaRepository arepo;
	@Autowired
	PropertyRepository prepo;
	@Autowired
	FacilityRepository frepo;
	@Autowired
	UserRepository urepo;
	
	public String addProperty(int userid,AddPropertyDTO prop) {
		Users u=urepo.findById(userid).get();
		Area a=new Area(prop.getPincode(),prop.getArea_name(),prop.getCity());
		Area a1;
		int pincode=a.getPincode();
		int pin=arepo.existsAreaByPin(pincode);
	      if(pincode != pin)
	      {
	    	  a1=arepo.save(a);		    	    
	      }
	      else {
	    	  a1=arepo.getAreaByPin(pincode);
	      }
		
		//Area a1=arepo.save(a);
		Facilities f=new Facilities(prop.getFurnished(), prop.getParking(), prop.getSecurity_guard(), prop.getLift(), prop.getCctv());
		Facilities f1=frepo.save(f);
		PropertyDetails pd=new PropertyDetails(prop.getAddress(),prop.getRent(),prop.getDesc());
		pd.setAreaData(a1);
		pd.setOwnerData(u);
		f1.setFacilityData(pd);
		PropertyDetails pd1= prepo.save(pd);
		return "Property added successfully";
	}
}
