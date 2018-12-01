package cn.binaryNetBug.mapper;

import java.util.List;

import cn.binaryNetBug.entity.User;

/**
 * 
 * @author 冯天赐
 * @content 数据库映射接口
 *
 */
public interface UserMapper {
	public void insertUser(User user);
	public void deleteUser(Integer userId);
	public void updateUser(User user);
	public User selectUser(Integer userId);
	public List<User> selectUserList();
	public User login(User user);
	public User selectNickName(String nickName);
}
