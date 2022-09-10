package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.pojos.Area;
import com.example.demo.repositories.AreaRepository;

@Service
public class AreaService {
	@Autowired
	AreaRepository arepo;
	
	public List<Area> getAll(){
		return arepo.findAll();
	}

	public Area addArea(Area a) {
		return arepo.save(a);
	}
}
