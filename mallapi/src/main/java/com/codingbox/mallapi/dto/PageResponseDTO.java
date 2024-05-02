package com.codingbox.mallapi.dto;

import lombok.Data;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Data
public class PageResponseDTO<E> {
    private List<E> dtoList;
    private List<Integer> pageNumberList;
    private PageRequestDTO pageRequestDTO;
    private boolean prev;
    private boolean next;
    private int totalCount;
    private int prevpage;
    private int nextpage;
    private int totalpage;
    private int current;

    public PageResponseDTO(List<E> dtoList, PageRequestDTO pageRequestDTO, long total) {
        this.dtoList = dtoList;
        this.pageRequestDTO = pageRequestDTO;
        this.totalCount = (int) total;

        int pageSize = pageRequestDTO.getSize();
        int currentPage = pageRequestDTO.getPage();
        this.totalpage = (int) Math.ceil((double) totalCount / pageSize);
        this.current = currentPage;

        int end = (int) Math.ceil((currentPage / 10.0)) * 10;
        int start = end - 9;

        end = Math.min(end, totalpage);

        this.prev = start > 1;
        this.next = end * pageSize < totalCount;

        this.pageNumberList = IntStream.rangeClosed(start, end)
                .boxed()
                .collect(Collectors.toList());

        this.prevpage = this.prev ? start - 1 : 0;
        this.nextpage = this.next ? end + 1 : 0;
        
        this.totalpage = this.pageNumberList.size();
        this.current = pageRequestDTO.getPage();
    }
}
