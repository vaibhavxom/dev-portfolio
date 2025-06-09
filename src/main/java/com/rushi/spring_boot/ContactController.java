package com.rushi.spring_boot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins ="http://localhost:3000") // Replace with your React domain in production
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> sendEmail(@RequestBody ContactForm contactForm) {
        emailService.sendContactEmail(contactForm);
        return ResponseEntity.ok("Message sent successfully");
    }
}
