package cn.binaryNetBug.entity;

import java.math.BigDecimal;

/**
 * @author 冯天赐
 * @content 用户实体类
 */
public class User {
	
	private Integer userId;//主键
	private String nickName;//用户名
	private String headImg;//头像
	private String password;//密码
	private String createTime;//创建时间
	private BigDecimal balance;//账户余额
	private Integer integral;//用户积分
	private String usable;//用户状态
	private String user_comment;//用户备注
	
	
	/**
	 * 用户积分
	 * @return the integral
	 */
	public Integer getIntegral() {
		return integral;
	}
	/**
	 * 用户积分
	 * @param integral the integral to set
	 */
	public void setIntegral(Integer integral) {
		this.integral = integral;
	}
	/**
	 * 用户状态
	 * @return the usable
	 */
	public String getUsable() {
		return usable;
	}
	/**
	 * 用户状态
	 * @param usable the usable to set
	 */
	public void setUsable(String usable) {
		this.usable = usable;
	}
	/**
	 * 用户备注
	 * @return the user_comment
	 */
	public String getUser_comment() {
		return user_comment;
	}
	/**
	 * 用户备注
	 * @param user_comment the user_comment to set
	 */
	public void setUser_comment(String user_comment) {
		this.user_comment = user_comment;
	}
	/**
	 * 主键
	 * @return the userId
	 */
	public Integer getUserId() {
		return userId;
	}
	/**
	 * 主键
	 * @param userId the userId to set
	 */
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	/**
	 * 用户名
	 * @return the nickName
	 */
	public String getNickName() {
		return nickName;
	}
	/**
	 * 用户名
	 * @param nickName the nickName to set
	 */
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	/**
	 * 头像
	 * @return the headImg
	 */
	public String getHeadImg() {
		return headImg;
	}
	/**
	 * 头像
	 * @param headImg the headImg to set
	 */
	public void setHeadImg(String headImg) {
		this.headImg = headImg;
	}
	/**
	 * 密码
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}
	/**
	 * 密码
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	/**
	 * 注册时间
	 * @return the createTime
	 */
	public String getCreateTime() {
		return createTime;
	}
	/**
	 * 注册时间
	 * @param createTime the createTime to set
	 */
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	/**
	 * 用户余额
	 * @return the balance
	 */
	public BigDecimal getBalance() {
		return balance;
	}
	/**
	 * 用户余额
	 * @param balance the balance to set
	 */
	public void setBalance(BigDecimal balance) {
		this.balance = balance;
	}
	/**
	 * @param userId
	 * @param nickName
	 * @param headImg
	 * @param password
	 * @param createTime
	 * @param balance
	 */
	public User(Integer userId, String nickName, String headImg, String password, String createTime,
			BigDecimal balance) {
		super();
		this.userId = userId;
		this.nickName = nickName;
		this.headImg = headImg;
		this.password = password;
		this.createTime = createTime;
		this.balance = balance;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "User [userId=" + userId + ", nickName=" + nickName + ", headImg=" + headImg + ", password=" + password
				+ ", createTime=" + createTime + ", balance=" + balance + "]";
	}
	/**
	 * 
	 */
	public User() {
		super();
	}
	
	
}
