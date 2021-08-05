package com.planner.dto;

import com.planner.model.PriorityType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.time.LocalDateTime;
import java.util.Calendar;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskRequest {
    private Long taskId;
    private Calendar taskDate;
    private String startTask;
    private String endTask;
    private String title;
    private String description;
    private PriorityType priority;
}
