package com.rushi.spring_boot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	
	 @Autowired
	    private JavaMailSender mailSender;

	    public void sendContactEmail(ContactForm form) {
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setTo("rushimithagare02@gmail.com");
	        message.setSubject("New Contact Message from " + form.getName());
	        message.setText("Name: " + form.getName() + "\nEmail: " + form.getEmail() + "\nMessage:\n" + form.getMessage());

	        mailSender.send(message);
	    }

}
