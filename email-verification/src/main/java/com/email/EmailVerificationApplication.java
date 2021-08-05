package com.email;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;


@SpringBootApplication
public class EmailVerificationApplication {
		
//	@Autowired
//	private EmailSenderService senderService;
	
	public static void main(String[] args) {
		SpringApplication.run(EmailVerificationApplication.class, args);
	}
//	@EventListener(ApplicationReadyEvent.class)
//	public void sendEmail() throws IOException
//	{
//		senderService.sendEmail();
//	}	
}
