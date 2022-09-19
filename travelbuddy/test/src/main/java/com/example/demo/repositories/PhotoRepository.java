package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.pojos.PropPhotos;

public interface PhotoRepository extends JpaRepository<PropPhotos, Integer> {

}
