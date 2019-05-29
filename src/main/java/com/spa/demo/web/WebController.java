package com.spa.demo.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import com.spa.demo.service.PostsService;

import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
@CrossOrigin(origins="http://bgpark82.tk")
public class WebController {

	 private PostsService postsService;

	    @GetMapping("/")
	    public String main(Model model) {
	        model.addAttribute("posts", postsService.findAllDesc());
	        return "index";
	    }
	    
	    @GetMapping("")
	    public String index() {
	    	return "index";
	    }
}