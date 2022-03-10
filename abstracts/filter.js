"use strict";

/**
 * 过滤器抽象基类
 */
module.exports = class filter {
  
  /**
   * 构造函数，默认传入event，context，noct几个参数
   */
	constructor({
		event,
		context,
		noct
	}) {
		this.event = event;
		this.context = context;
		this.noct = noct;
	}
  
  /**
   * 当方法执行时
   */
	onActionExecuting() {

	}
  
  /**
   * 当方法执行后
   */
	onActionExecuted() {

	}
  
  /**
   * 当方法发生异常
   */
	onException() {

	}
  
}
