package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.pojos.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
	@Query("select  u from Users u where u.email=:em and u.password=:pass")
    Optional<Users> Login(@Param("em") String email,@Param("pass") String password);
	
	@Query("select  u from Users u where u.userid=:userid")
    Users getUser(@Param("userid")int userid);
}
