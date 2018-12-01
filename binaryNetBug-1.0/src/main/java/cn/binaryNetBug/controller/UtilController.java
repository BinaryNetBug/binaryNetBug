package cn.binaryNetBug.controller;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author 冯天赐
 * @content 工具控制器
 */
@Controller
public class UtilController {
	/**
	 * @author 冯天赐
	 * @content 上传图片方法
	 */
	@RequestMapping(value="/uploadFile.do")
	@ResponseBody
	public String UploadFile(MultipartFile file,HttpServletRequest request){
		System.out.println("进入文件上传方法");
		String filename = System.currentTimeMillis()+"&"+file.getOriginalFilename();
		String destPath = request.getServletContext().getRealPath("/upload/"+filename);
		System.out.println(destPath);
		File UploadFile = new File(destPath);
		try {
			file.transferTo(UploadFile);//将文件拷贝到指定目录
			System.out.println(filename);
			return filename;
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
