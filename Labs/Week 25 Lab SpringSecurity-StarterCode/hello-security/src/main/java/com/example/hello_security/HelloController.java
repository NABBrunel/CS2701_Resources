package com.example.hello_security;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

//HelloWorld Controller is a REST controller, which responds to
//any request under http://localhost:8080/hello
@RestController  
@RequestMapping("/hello")
public class HelloController {	

	public HelloController() {
		super();
		
	}
	
	//Responds to GET
	@GetMapping
	public String hello(){
		return "Secure Hello World";
    }	
}