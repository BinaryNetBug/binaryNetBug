package cn.binaryNetBug.service;

import java.util.List;

import cn.binaryNetBug.entity.User;

/**
 * 
 * @author 冯天赐
 * @content 与用户有关的逻辑interface
 *
 */
public interface UserService {
	public User insertUser(User user);
	public void deleteUser(Integer userId);
	public void updateUser(User user);
	public User selectUser(Integer userId);
	public List<User> selectUserList();
	public User login(User user);
	public User selectNickName(String nickName);
}
