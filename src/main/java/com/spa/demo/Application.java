package com.spa.demo;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class Application {

	  public static final String APPLICATION_LOCATIONS = "spring.config.location="
	            + "classpath:application.yml,"
	            + "/app/config/springboot-react/real-application.yml";

	  // 프로젝트 내부의 yml과 외부의 yml 모두 호출
	    public static void main(String[] args) {
	        new SpringApplicationBuilder(Application.class)
	                .properties(APPLICATION_LOCATIONS)
	                .run(args);
	    }

}
