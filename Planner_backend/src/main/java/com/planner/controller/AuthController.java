package com.planner.controller;

import com.planner.dto.AuthenticationResponse;
import com.planner.dto.LoginRequest;
import com.planner.dto.RegisterRequest;
import com.planner.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {
    private final AuthService authServices;
    @PostMapping("/registration")
    public ResponseEntity<String> signup(@RequestBody RegisterRequest registerRequest){
        authServices.registration(registerRequest);
        return new ResponseEntity<>("User Registration Successful", HttpStatus.OK);
    }

    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody LoginRequest loginRequest) throws Exception {
        return authServices.login(loginRequest);
    }
}
