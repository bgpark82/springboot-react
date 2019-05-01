package com.spa.demo.domian.posts;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.spa.demo.domian.BaseTimeEntity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Posts extends BaseTimeEntity{

	/*
	 * 실제 DB테이블과 매칭될 클래스 = Entity Class 
	 */
	
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(length = 500, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;
    private String author;

    /*
     * 생성자의 경우 지금 채워야할 필드가 무엇인지 명확히 지정할수가 없습니다. 
     * 어느 필드에 어떤 값을 채워야 할지 명확하게 인지할 수 있습니다.
     * https://using.tistory.com/71
     */
    @Builder
    public Posts(String title, String content, String author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

	
}


