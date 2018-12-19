package cn.binaryNetBug.serviceImpl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.binaryNetBug.entity.User;
import cn.binaryNetBug.mapper.UserMapper;
import cn.binaryNetBug.service.UserService;
import cn.binaryNetBug.utils.Md5;

/**
 * 
 * @author 冯天赐
 * @date 2018/06/23
 *
 */
@Service
public class UserServiceImpl implements UserService {

	@Resource
	private UserMapper userMapper;
	
	
	
	/**
	 * @param userMapper the userMapper to set
	 */
	public void setUserMapper(UserMapper userMapper) {
		this.userMapper = userMapper;
	}

	/**
	 * @content 用户注册
	 * @param user
	 */
	@Override
	public User insertUser(User user) {
		User user1 = this.userMapper.selectNickName(user.getNickName());
		if(user1 == null){
			user.setPassword(Md5.encrypt(user.getPassword()));
			this.userMapper.insertUser(user);
			return user;
		}else{
			return null;
		}
	}

	/**
	 * @content 用户注销
	 */
	@Override
	public void deleteUser(Integer userId) {
		this.userMapper.deleteUser(userId);
	}

	@Override
	public void updateUser(User user) {
		if(user != null)
			user.setPassword(Md5.encrypt(user.getPassword()));
		this.userMapper.updateUser(user);
	}

	@Override
	public User selectUser(Integer userId) {
		return this.userMapper.selectUser(userId);
	}

	@Override
	public List<User> selectUserList() {
		return this.userMapper.selectUserList();
	}

	@Override
	public User login(User user) {
		if(user != null)
			user.setPassword(Md5.encrypt(user.getPassword()));
		return this.userMapper.login(user);
	}

	@Override
	public User selectNickName(String nickName) {
		return this.userMapper.selectNickName(nickName);
	}
	
}
