package com.rushi.spring_boot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class Controller {
	

    @Autowired
    private Repository repo;

    @GetMapping
    public List<Project> getAllProjects() {
        return repo.findAll();
    }

    @PostMapping
    public Project addProject(@RequestBody Project project) {
        return repo.save(project);
    }

}
