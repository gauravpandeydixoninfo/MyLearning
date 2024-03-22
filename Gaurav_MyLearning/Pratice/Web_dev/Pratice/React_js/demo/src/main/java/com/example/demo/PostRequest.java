package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostRequest {

    @PostMapping("/posts")
    public ResponseEntity<String> createPost(@RequestBody Post post) {
        // Process the incoming post object (e.g., save to database)
        System.out.println("Received post: " + post.getTitle() + ", " + post.getContent());
        
        // Return a response
        return new ResponseEntity<>("Post created successfully", HttpStatus.CREATED);
    }
}

