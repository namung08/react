package com.codingbox.mallapi.repository;

import com.codingbox.mallapi.domain.Todo;
import com.codingbox.mallapi.search.TodoSearch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepositoryInterface extends JpaRepository<Todo, Long>, TodoSearch {
}