package com.example.demo.customexception;

public class CustomerHandlingException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public CustomerHandlingException(String errMesg) {
		super(errMesg);
	}

}