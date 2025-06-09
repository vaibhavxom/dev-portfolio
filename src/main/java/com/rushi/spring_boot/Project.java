package com.rushi.spring_boot;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Project {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String title;
    private String description;
    private String techStack;
    private String githubUrl;
    private String liveDemoUrl;
    
    //getters and setters
    
    public Long getId() {
		return id;
	}
    
	public String getTitle() {
		return title;
	}
	
	public String getDescription() {
		return description;
	}
	
	public String getTechStack() {
		return techStack;
	}
	
	public String getGithubUrl() {
		return githubUrl;
	}
	
	public String getLiveDemoUrl() {
		return liveDemoUrl;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public void setTechStack(String techStack) {
		this.techStack = techStack;
	}
	
	public void setGithubUrl(String githubUrl) {
		this.githubUrl = githubUrl;
	}
	
	public void setLiveDemoUrl(String liveDemoUrl) {
		this.liveDemoUrl = liveDemoUrl;
	}
	
}
