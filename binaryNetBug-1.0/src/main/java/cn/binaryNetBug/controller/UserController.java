package cn.binaryNetBug.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.binaryNetBug.entity.User;
import cn.binaryNetBug.service.UserService;

/**
 * 
 * @author 冯天赐
 * @content 用户登录、注册、注销、修改信息、修改密码等
 *
 */
@Controller
public class UserController {
	@Resource
	private UserService userService;

	/**
	 * @param userService the userService to set
	 */
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	//注册
	/**
	 * @author 冯天赐
	 * @content 用户注册
	 * @param user
	 * @return
	 */
	@RequestMapping("/design.do")
	@ResponseBody
	public User design(User user){
		User user1 = null;
		try{
			user1 = this.userService.insertUser(user);
		}catch(Exception e){
		}
		return user1;
	}
	//登录
	/**
	 * @content 用户登录
	 * @author 冯天赐
	 * @param user
	 * @return user
	 * 
	*/
	@RequestMapping("/login.do")
	@ResponseBody
	public User login(User user){
		return this.userService.login(user);
	}
	/**
	 * @content 用户验证
	 * @param nickName
	*/
	@RequestMapping("/select.do")
	@ResponseBody
	public User select(String nickName){
		return this.userService.selectNickName(nickName);
	}
}
