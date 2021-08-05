package com.planner.service;

import com.planner.dto.TaskRequest;
import com.planner.model.PriorityType;
import com.planner.model.Task;
import com.planner.model.User;
import com.planner.repository.TaskRepository;
import com.planner.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

@Service
@AllArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;
    private final AuthService authService;

    public void save(TaskRequest taskRequest){
        Task task = new Task();
        //task.setEndTask(taskRequest.getEndTask());
        LocalTime endTask = LocalTime.parse(taskRequest.getEndTask().toString());
        task.setEndTask(endTask.toSecondOfDay());
        LocalTime startTask = LocalTime.parse(taskRequest.getStartTask().toString());
        task.setStartTask(startTask.toSecondOfDay());
        //task.setStartTask(taskRequest.getStartTask());
        task.setTaskDate(taskRequest.getTaskDate());
        task.setDescription(taskRequest.getDescription());
        task.setPriority(taskRequest.getPriority());
        task.setTitle(taskRequest.getTitle());
        task.setUser(authService.getCurrentUser());
        taskRepository.save(task);
    }
}
