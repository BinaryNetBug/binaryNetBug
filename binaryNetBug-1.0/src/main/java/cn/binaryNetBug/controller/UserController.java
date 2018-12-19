package cn.binaryNetBug.controller;

import cn.binaryNetBug.entity.Result;
import cn.binaryNetBug.entity.User;
import cn.binaryNetBug.service.UserService;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController
{
  @Resource
  private UserService userService;
  private Result result = new Result();
  
  public void setUserService(UserService userService)
  {
    this.userService = userService;
  }
  
  @RequestMapping({"/design.do"})
  @ResponseBody
  public User design(User user)
  {
    User user1 = null;
    try
    {
      user1 = this.userService.insertUser(user);
    }
    catch (Exception localException) {}
    return user1;
  }
  
  @RequestMapping({"/login.do"})
  @ResponseBody
  public User login(User user, HttpServletRequest request)
  {
    user = this.userService.login(user);
    if (user == null) {
      return null;
    }
    request.getSession().setAttribute("user", user);
    return user;
  }
  
  @RequestMapping({"/select.do"})
  @ResponseBody
  public User select(String nickName)
  {
    return this.userService.selectNickName(nickName);
  }
  
  @RequestMapping({"/loginOut.do"})
  @ResponseBody
  public Boolean loginOut(HttpServletRequest request)
  {
    try
    {
      request.getSession().removeAttribute("user");
    }
    catch (Exception e)
    {
      return Boolean.valueOf(false);
    }
    return Boolean.valueOf(true);
  }
  
  /**
   * @author 冯天赐
   * @param user
   * @content 修改用户信息
   */
  @RequestMapping({"/updateUser.do"})
  @ResponseBody
  public boolean updateUser(User user){
	  User ouser = userService.selectNickName(user.getNickName());
	  if(ouser == null){
		  try{
			  userService.updateUser(user);
		  }catch (Exception e){
			  return Boolean.valueOf(false);
		  }
		  return true;
	  }
	  return false;
  }
  
  /**
   * @author 冯天赐
   * @param user
   * @param oldpassword
   * @content 修改用户密码
   */
  @RequestMapping({"/resetPassword"})
  @ResponseBody
  public Result resetPassword(String nickName,String newPassword,String oldpassword,HttpServletRequest request){
	  User user = new User();
	  user.setNickName(nickName);
	  user.setPassword(oldpassword);
	  //验证原密码
	  User oldUser = userService.login(user);
	  if(oldUser != null){
		  user.setUserId(oldUser.getUserId());
		  user.setPassword(newPassword);
		  userService.updateUser(user);
		  request.getSession().removeAttribute("user");
		  result.setResult(true);
		  result.setMessage("密码修改完成，请重新登录！");
	  }else{
		  result.setResult(false);
		  result.setError("密码错误！");
	  }
	  return result;
  }
  
}
