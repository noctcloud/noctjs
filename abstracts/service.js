"use strict";

/**
 * 服务抽象基类
 */
module.exports = class service {
  
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
  
}
