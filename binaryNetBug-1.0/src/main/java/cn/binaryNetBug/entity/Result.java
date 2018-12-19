package cn.binaryNetBug.entity;

public class Result {
	//结果，包含信息（message）、错误信息（error）、是否成功（result）
	private Boolean result;
	private Object message;
	private String error;
	/**
	 * @return the result
	 */
	public Boolean getResult() {
		return result;
	}
	/**
	 * @param result the result to set
	 */
	public void setResult(Boolean result) {
		this.result = result;
	}
	/**
	 * @return the message
	 */
	public Object getMessage() {
		return message;
	}
	/**
	 * @param message the message to set
	 */
	public void setMessage(Object message) {
		this.message = message;
	}
	/**
	 * @return the error
	 */
	public String getError() {
		return error;
	}
	/**
	 * @param error the error to set
	 */
	public void setError(String error) {
		this.error = error;
	}
	
	
}
