package com.planner.model;


import lombok.*;

import javax.persistence.*;
import java.sql.Time;
import java.util.Calendar;

import static javax.persistence.FetchType.LAZY;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long taskId;

    @Temporal(TemporalType.DATE)
    private Calendar taskDate;
    private Time startTask;
    private Time endTask;
    private String title;
    private String description;
    private PriorityType priority;
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "userId",referencedColumnName = "userId")
    private User user;

}
