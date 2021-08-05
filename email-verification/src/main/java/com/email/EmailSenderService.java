package com.email;


import java.io.IOException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.email.entity.Application;
@CrossOrigin(origins = "*")
@RestController
public class EmailSenderService {

			@Autowired
			private JavaMailSender mailSender;
			@PostMapping("/application")
			public String sendEmail(@RequestBody Application application) throws IOException{
			
				String email=application.getEmail();
				SimpleMailMessage message=new SimpleMailMessage();
				message.setFrom("narayanaprakash3734@gmail.com");
				message.setTo(email);
				message.setText("your Application successFully submitted");
				message.setSubject("form Application");
				mailSender.send(message);
				return "Email send SuccessFully";
				
			}
}
