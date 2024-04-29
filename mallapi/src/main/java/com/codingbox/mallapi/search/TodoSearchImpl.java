package com.codingbox.mallapi.search;

import com.codingbox.mallapi.domain.QTodo;
import com.codingbox.mallapi.domain.Todo;
import com.codingbox.mallapi.search.TodoSearch;
import com.querydsl.jpa.JPQLQuery;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

@Log4j2
public class TodoSearchImpl extends QuerydslRepositorySupport implements TodoSearch {

    public TodoSearchImpl() {
        super(Todo.class);
    }

    // queryDSL 작업 시작
    @Override
    public Page<Todo> search() {
        log.info("------------------------search----------------------");
        QTodo todo = QTodo.todo;
        JPQLQuery<Todo> query = from(todo);
        query.where(todo.title.contains("1"));

        // 페이징 처리를 querydsl의 pageable로 사용한다.
        Pageable pageable = PageRequest.of(1, 10, Sort.by("tno").descending());

        this.getQuerydsl().applyPagination(pageable, query);


        query.fetch();
        query.fetchCount();

        return null;
    }

}