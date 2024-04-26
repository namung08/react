package com.codingbox.mallapi.repository;

import com.codingbox.mallapi.domain.Todo;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

//@Repository
@RequiredArgsConstructor
@Transactional
public class TodoRepository {
    private final EntityManager em;

    public void save(Todo todo) {
        em.persist(todo);
    }

    public List<Todo> findAll() {
        return em.createQuery("from Todo", Todo.class).getResultList();
    }

    public Todo findById(Long id) {
        return em.find(Todo.class, id);
    }

    public void update(Long id,Todo updatedTodo) {
        Todo findTodo = findById(id);

        findTodo.setTitle(updatedTodo.getTitle());
        findTodo.setContent(updatedTodo.getContent());
        findTodo.setComplete(updatedTodo.isComplete());
        findTodo.setWriter(updatedTodo.getWriter());
        findTodo.setDueDate(updatedTodo.getDueDate());

    }
}
