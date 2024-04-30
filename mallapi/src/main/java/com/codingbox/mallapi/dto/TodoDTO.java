package com.codingbox.mallapi.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoDTO {
	private long tno;
	private String title;
	private String content;
	private String writer;
	private boolean complete;
	private LocalDate dueDate;		
}






