package com.codingbox.mallapi.repository;

import java.time.LocalDate;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnThreading;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.codingbox.mallapi.domain.Todo;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class TodoRepositoryTest {
	
//	@Autowired
//	private TodoRepository todoRepository;
	
	@Autowired
	private TodoRepositoryInterface todoRepository;
	
//	@Test
	public void test1() {
		log.info("-------------------------------------");
		log.info(todoRepository);
	}
	
//	@Test
	public void test2() {
		Assertions.assertNotNull(todoRepository);
		log.info("result : " + todoRepository.getClass().getName());
	}
	
//	@Test
	public void saveTest() {
		for(int i=0; i<100; i++) {
			Todo todo = new Todo();
			todo.setTitle("title" + i);
			todo.setContent("내용입력" + i);
			todo.setWriter("writer" + i);
			todo.setDueDate(LocalDate.of(2024, 04, 26));
			todoRepository.save(todo);
		}
	}
	
//	@Test
	public void testFindById() {
		Long tno = 1L;
		Optional<Todo> result = todoRepository.findById(tno);
		Todo todo = result.orElseThrow();
		log.info("-----------------------");
		log.info(todo);
	}
	
//	@Test
	public void testUpdate() {
		Long tno = 1L;		
		Optional<Todo> result = todoRepository.findById(tno);
		
		Todo todo = result.orElseThrow();
		todo.setContent("update content");
		todo.setComplete(true);
		todo.setTitle("update title");
		
		todoRepository.save(todo);		
		log.info("----------------");
		log.info(todo);	// todo : update된 결과값
	}
	
//	@Test
//	public void testDelete() {
//		Long tno = 1L;
//		todoRepository.deleteById(tno);
//	}
	
	// 페이징 처리
//	@Test
	public void testPasing() {
		// 페이지 번호 : 0부터 시작
		Pageable pageable = 
				PageRequest.of(0, 10, Sort.by("tno").descending());
		Page<Todo> result = todoRepository.findAll(pageable);
		
		log.info(result.getTotalElements());
		log.info(result.getContent());
		
	}
	
//	@Test
//	public void testSearch() {
//		todoRepository.search();
//	}
	
	
}











