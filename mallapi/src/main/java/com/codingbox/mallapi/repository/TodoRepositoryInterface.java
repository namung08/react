package com.codingbox.mallapi.repository;

import com.codingbox.mallapi.domain.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepositoryInterface extends JpaRepository<Todo, Long> {
}