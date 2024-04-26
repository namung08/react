package com.codingbox.mallapi.repository;

import com.codingbox.mallapi.domain.Todo;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.time.LocalDate;
import java.util.Optional;

@SpringBootTest
@Log4j2
class TodoRepositoryTest {

    //    @Autowired
//    private TodoRepository todoRepository=null;
    @Autowired
    private TodoRepositoryInterface todoRepository;

    @Test
    void test1(){
        log.info("-----");
        log.info(todoRepository);
    }

    @Test
    void test2(){
        Assertions.assertNotNull(todoRepository);
        log.info("result : " +todoRepository.getClass().getName());
    }

    @Test
    void saveTest(){
        for(int i = 0 ; i < 100 ; i++) {
            Todo todo = new Todo();
            todo.setTitle("title"+i);
            todo.setContent("content"+i);
            todo.setWriter("writer"+i);
            todo.setDueDate(LocalDate.of(i,04,26));
            todoRepository.save(todo);
        }
    }
    @Test
    void testFindById() {
        Long tno = 1L;
        Optional<Todo> result = todoRepository.findById(tno);
        Todo todo = result.orElseThrow();
        log.info("-------------------------------");
        log.info(todo);
    }

    @Test
    void testUpdate() {
        Long tno = 1L;
        Optional<Todo> result = todoRepository.findById(tno);

        Todo todo = result.orElseThrow();
        todo.setTitle("타이틀");
        todo.setWriter("글씨");
        todo.setContent("내용");
        todo.setComplete(true);
        todo.setDueDate(LocalDate.of(2024,04,27));
        todoRepository.save(todo);
        log.info("------------");
        log.info(todo);
    }

    //    @Test
//    void testDelete() {
//        Long tno = 1L;
//        todoRepository.deleteById(tno);
//    }
    // 페이징 처리
    @Test
    void testPasing() {
        // 0부터 시작 10개를 출력
        // order by tno 내림차순
        Pageable pageable =
                PageRequest.of(0,10, Sort.by("tno").descending());

        Page<Todo> todoPage = todoRepository.findAll(pageable);

        log.info("---------");
        log.info(todoPage.getTotalElements());
        log.info(todoPage.getContent()+"\n");
    }
}
