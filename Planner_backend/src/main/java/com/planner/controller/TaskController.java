package com.planner.controller;

import com.planner.dto.TaskRequest;
import com.planner.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/tasks")
@AllArgsConstructor
public class TaskController {
    private final TaskService taskService;
    @PostMapping
    public ResponseEntity<Void> createTask(@RequestBody TaskRequest taskRequest){
        taskService.save(taskRequest);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
