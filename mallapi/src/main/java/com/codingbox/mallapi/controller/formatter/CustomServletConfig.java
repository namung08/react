package com.codingbox.mallapi.controller.formatter;

import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import lombok.extern.java.Log;
import lombok.extern.log4j.Log4j2;

@Configuration
@Log4j2
public class CustomServletConfig implements WebMvcConfigurer{

	@Override
	public void addFormatters(FormatterRegistry registry) {
		log.info("------------addFormatters-------------");		
		registry.addFormatter(new LocalDateFomatter());
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")	// 어느경로에 cors를 적용하는지?모든경로
				.maxAge(500)		// 서버에 연결 유효시간
				.allowedMethods("GET","POST","PUT","DELETE","HEAD","OPTIONS")
				.allowedOrigins("*");	// 어느경로에서 들어오는것을 허용하는지? 모든경로
	}
	
}








