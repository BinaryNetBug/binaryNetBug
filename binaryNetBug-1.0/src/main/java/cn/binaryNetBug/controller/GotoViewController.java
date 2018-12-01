package cn.binaryNetBug.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 
 * @author 冯天赐
 * @content 跳转
 *
 */
@Controller
public class GotoViewController {
	/**
	 * @author 冯天赐
	 * @content 跳转至首页
	 * @return
	 */
	@RequestMapping("/index.do")
	public String toRegist(){
		return "index";
	}
	/**
	 * @author 冯天赐
	 * @content 跳转至好玩儿页
	 * @return
	 */
	@RequestMapping("/about.do")
	public String toAbout(){
		return "about";
	}
	/**
	 * @author 冯天赐
	 * @content 跳转至有用页
	 * @return
	 */
	@RequestMapping("/myths.do")
	public String toMyths(){
		return "myths";
	}
	/**
	 * @author 冯天赐
	 * @content 跳转至推荐页
	 * @return
	 */
	@RequestMapping("/archives.do")
	public String toArchives(){
		return "archives";
	}
}
