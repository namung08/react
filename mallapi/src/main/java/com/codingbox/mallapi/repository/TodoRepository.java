package com.codingbox.mallapi.repository;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.codingbox.mallapi.domain.Todo;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

// @Repository
@RequiredArgsConstructor
@Transactional
public class TodoRepository {
	
	private final EntityManager em;
	
	public void save(Todo todo) {
		em.persist(todo);
	}
	
	public List<Todo> findAll(){
		return em.createQuery("select m from Todo m",Todo.class).getResultList();
	}
	
	public Todo findById(Long id) {
		Todo todo = em.find(Todo.class,id);
		return todo;
	}
	
	public void update(Long id,Todo updateParam) {
		Todo findTodo = findById(id);
		findTodo.setTitle(updateParam.getTitle());
		findTodo.setContent(updateParam.getContent());
		findTodo.setComplete(updateParam.isComplete());
		findTodo.setWriter(updateParam.getWriter());
		findTodo.setDueDate(updateParam.getDueDate());
	}
}
