package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetRequest {

    @GetMapping("/hlw")
    public String getGreeting() {
        return "Hello, World!";
    }
}