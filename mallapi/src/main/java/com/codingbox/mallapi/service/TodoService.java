package com.codingbox.mallapi.service;

import com.codingbox.mallapi.domain.Todo;

import com.codingbox.mallapi.dto.PageRequestDTO;
import com.codingbox.mallapi.dto.PageResponseDTO;
import com.codingbox.mallapi.dto.TodoDTO;

public interface TodoService {
	TodoDTO get(Long tno);
	
	// 등록
	Long register(TodoDTO dto);
	
	// 수정
	void modify(TodoDTO dto);
	
	// 삭제
	void remove(Long tno);
	
	PageResponseDTO<TodoDTO> getList(PageRequestDTO pageRequestDTO);
	/*
	 *  default 키워드
	 *   : 메서드를 default키워드를 사용해서 선언함으로써 메서드의 body, 즉 구현부를 작성할 수 있게 되었다.
	 */
	default TodoDTO entityToDto(Todo todo) {
		TodoDTO todoDTO = new TodoDTO();
		todoDTO.setTno(todo.getTno());
		todoDTO.setTitle(todo.getTitle());
		todoDTO.setContent(todo.getContent());
		todoDTO.setWriter(todo.getWriter());
		todoDTO.setComplete(todo.isComplete());
		todoDTO.setDueDate(todo.getDueDate());
		
		return todoDTO;
	}
	
	// DTO를 entity로 변환
	default Todo dtoToEntity(TodoDTO todoDTO) {
		Todo todo = new Todo();
		todo.setTno(todoDTO.getTno());
		todo.setTitle(todoDTO.getTitle());
		todo.setContent(todoDTO.getContent());
		todo.setWriter(todoDTO.getWriter());
		todo.setComplete(todoDTO.isComplete());
		todo.setDueDate(todoDTO.getDueDate());
		
		return todo;
	}
	 
	
}
