package com.spa.demo.web;

import java.util.Arrays;
import java.util.List;

import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spa.demo.domian.posts.Posts;
import com.spa.demo.domian.posts.PostsRepository;
import com.spa.demo.dto.posts.PostsSaveRequestDto;
import com.spa.demo.service.PostsService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
public class WebRestController {

	/* @Autowired는 비권장방식입니다
	 * 
	 * private PostsRepository postsRepository;
	 *
     * public WebRestController(PostsRepository postsRepository) {
     *    this.postsRepository = postsRepository;
     * }
	 */
	
	
	private Environment env;
	private PostsRepository postsRepository;
	private PostsService postsService;
	
	@GetMapping("/hello")
	public String hello() {
		return "hello";
	}
	
	@PostMapping("/posts")
	public Long savePosts(@RequestBody PostsSaveRequestDto dto){
		return postsService.save(dto);
	}
	
	@GetMapping("/posts")
	public List<Posts> showPosts(){
		return postsRepository.findAll();
	}
	
	// 현재 profile 확인
	@GetMapping("/profile")
	public String getProfile () {
	    return Arrays.stream(env.getActiveProfiles())
	            .findFirst()
	            .orElse("");
	}
	
}
