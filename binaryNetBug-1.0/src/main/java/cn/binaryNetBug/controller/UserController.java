package cn.binaryNetBug.controller;

import cn.binaryNetBug.entity.User;
import cn.binaryNetBug.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
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
    ObjectMapper mapper = new ObjectMapper();
    String userString = "";
    try
    {
      userString = mapper.writeValueAsString(user);
    }
    catch (JsonProcessingException e)
    {
      e.printStackTrace();
    }
    request.getSession().setAttribute("user", userString);
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
}
