package cn.binaryNetBug.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * 
 * @author 冯天赐
 * @content MD5加密工具类
 */
public class Md5 {
	public static String encrypt(String source){
		MessageDigest md = null;
		try {
			md = MessageDigest.getInstance("md5");
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		byte[] result = md.digest(source.getBytes());//已加密
		StringBuffer sb = new StringBuffer();
		for(byte b:result){
			int number = b & 0xff;
			String str = Integer.toHexString(number);
			if(str.length()==1){
				sb.append("1");
			}
			sb.append(str);
		}
		return sb.toString();
	}
}
