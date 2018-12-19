package cn.binaryNetBug.controller;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	 * @content 上传文件方法
	 */
	@RequestMapping(value = "/uploadFile.do")
	@ResponseBody
	public String UploadFile(MultipartFile file, HttpServletRequest request, String fileType) {
		String filename = System.currentTimeMillis() + "&" + file.getOriginalFilename();
		String destPath = "D:/upload/" + fileType + "/" + filename;
		File UploadFile = new File(destPath);
		try {
			file.transferTo(UploadFile);// 将文件拷贝到指定目录
			return destPath;
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * @author 冯天赐
	 * @content 下载文件方法
	 */
	@RequestMapping(value = "/downloadFile.do")
	@ResponseBody
	public String downloadFile(HttpServletRequest request, HttpServletResponse response){
		String fileName = request.getParameter("filename");
		String fileType = request.getParameter("fileType");
		if (fileName != null) {
			String realPath = "D:/upload/"+fileType;// tomcat的WebRoot下的路径
			File file = new File(realPath, fileName);
			if (file.exists()) {
				response.setContentType("multipart/form-data;application/octet-stream;charset=utf-8");// 设置强制下载不打开
				fileName = fileName.replaceAll("\\+", "%20");
				response.addHeader("Content-Type", "text/html; charset=utf-8");
				try {
					response.addHeader("Content-Disposition",
							"attachment;fileName=" + new String(fileName.getBytes("UTF-8"), "ISO-8859-1"));
				} catch (UnsupportedEncodingException e1) {
					e1.printStackTrace();
				}
				byte[] buffer = new byte[1024];
				FileInputStream fis = null;
				BufferedInputStream bis = null;
				try {
					fis = new FileInputStream(file);
					bis = new BufferedInputStream(fis);
					OutputStream os = response.getOutputStream();
					int i = bis.read(buffer);
					while (i != -1) {
						os.write(buffer, 0, i);
						i = bis.read(buffer);
					}
				} catch (FileNotFoundException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				} finally {
					if (bis != null) {
						try {
							bis.close();
						} catch (IOException e) {
							e.printStackTrace();
						}
					}
					if (fis != null) {
						try {
							fis.close();
						} catch (IOException e) {
							e.printStackTrace();
						}
					}
				}
			}
		}
		return null;
	}
}
