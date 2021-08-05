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

@Service
@AllArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;
    private final AuthService authService;

    public void save(TaskRequest taskRequest){
        Task task = new Task();
        //task.setEndTask(taskRequest.getEndTask());
        //task.setStartTask(taskRequest.getStartTask());
        //task.setTaskDate(taskRequest.getTaskDate());
        task.setDescription(taskRequest.getDescription());
        //task.setPriority(taskRequest.getPriority());
        task.setPriority(PriorityType.Low);
        task.setTitle(taskRequest.getTitle());
        task.setUser(authService.getCurrentUser());
        taskRepository.save(task);
    }
}
