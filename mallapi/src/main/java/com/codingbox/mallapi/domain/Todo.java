package com.codingbox.mallapi.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@Entity
@ToString
@Getter @Setter
@NoArgsConstructor
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "todoGenerator")
    @SequenceGenerator(name = "todoGenerator", allocationSize = 1)
    private long tno;
    @Column(length = 500,nullable = false)
    private String title;
    private String writer;
    private String content;
    private boolean complete;
    private LocalDate dueDate;
}
