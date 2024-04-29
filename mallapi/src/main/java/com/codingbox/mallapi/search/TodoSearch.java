package com.codingbox.mallapi.search;

import com.codingbox.mallapi.domain.Todo;
import org.springframework.data.domain.Page;

public interface TodoSearch {
    Page<Todo> search();
}
