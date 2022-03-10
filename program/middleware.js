"use strict";

const invoke = require("./invoke");

/**
 * 使用中间件
 */
module.exports.use = async ({
	event,
	context,
	noct
}) => {
	let middlewares = noct.middlewares;
	if (middlewares.length > 0) {
		let next = async (i) => {
			if (middlewares.length > i) {
				await middlewares[i]({
					event,
					context,
					noct,
					next: async () => {
						i++;
						await next(i);
					}
				});
			} else {
				await invoke({
					event,
					context,
					noct
				});
			}
		}
		await next(0);
	} else {
		await invoke({
			event,
			context,
			noct
		});
	}
}