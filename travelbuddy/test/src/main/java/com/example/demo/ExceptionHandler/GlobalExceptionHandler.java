package com.example.demo.ExceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.demo.customexception.CustomerHandlingException;
import com.example.demo.dto.ErrorResponse;

public class GlobalExceptionHandler extends ResponseEntityExceptionHandler{
	@ExceptionHandler(CustomerHandlingException.class)
	public ResponseEntity<ErrorResponse> handleCustomerHandlingException(CustomerHandlingException e) {
		System.out.println("in handle customer exc");
		return new ResponseEntity<>(new ErrorResponse("Invalid Login", e.getMessage()),
				 HttpStatus.UNAUTHORIZED);
	}
}
