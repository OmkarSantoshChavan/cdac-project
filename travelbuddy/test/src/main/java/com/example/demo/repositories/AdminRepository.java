package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.pojos.Users;

public interface AdminRepository extends JpaRepository<Users, Integer> {

}
