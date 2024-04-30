package com.codingbox.mallapi.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PageRequestDTO {
	private int page = 1;	// 페이지 번호
	private int size = 10;	// 페이지 사이즈
}







