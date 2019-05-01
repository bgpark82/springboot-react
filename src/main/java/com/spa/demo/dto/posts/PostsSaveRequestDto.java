package com.spa.demo.dto.posts;

import com.spa.demo.domian.posts.Posts;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostsSaveRequestDto {

	/*
	 * DTO 
	 * 
	 * 절대로 테이블과 매핑되는 Entity 클래스를 Request / Response 클래스로 사용해서는 안됩니다.
	 * Entity 클래스는 가장 Core한 클래스라고 보시면 되는데요.  
	 * 
	 */
	
    private String title;
    private String content;
    private String author;

    public Posts toEntity(){
        return Posts.builder() // create builder instance
                .title(title)
                .content(content)
                .author(author)
                .build();		// create an instance of annotated (@builder) class
    }
}
