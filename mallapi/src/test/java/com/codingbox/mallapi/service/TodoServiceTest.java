package com.codingbox.mallapi.service;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.codingbox.mallapi.dto.PageRequestDTO;
import com.codingbox.mallapi.dto.TodoDTO;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class TodoServiceTest {
	
	@Autowired
	TodoService todoService;
	
//	@Test
	public void testGet() {
		Long tno = 100L;
		log.info(todoService.get(tno));		
	}
	
//	@Test
	public void testRegister() {
		TodoDTO todoDTO = new TodoDTO();
		todoDTO.setTitle("test Title");
		todoDTO.setContent("test Content");
		todoDTO.setTitle("test title");
		todoDTO.setWriter("test writer");
		todoDTO.setDueDate(LocalDate.of(2024, 04, 29));
		log.info(todoService.register(todoDTO));
	}
	
	@Test
	public void testGetList() {
		PageRequestDTO pageRequestDTO = new PageRequestDTO();
		//pageRequestDTO.setPage(3);
		log.info(todoService.getList(pageRequestDTO));
	}

}










