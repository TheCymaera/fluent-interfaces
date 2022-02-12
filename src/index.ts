/**
 * Invoke a function with "this" and return "this".
 * @example
 * new Widget()
 * .setTitle("Hello World!")
 * .setDescription("Welcome to my website!")
 * [cascade](doStuff)
 * [cascade](self=>console.log("Created widget:", self))
 * // returns Widget
 */
export const cascade = Symbol("cascade");

Object.prototype[cascade] = function (callback: (self: any)=>any) {
	callback.call(this,this);
	return this;
}

/**
 * Invoke a function with "this" and return the result of the function.
 * @example
 * new Widget()
 * .setTitle("Hello World!")
 * .setDescription("Welcome to my website!")
 * [transform](self=>new Wrapper(self))
 * // returns Wrapper
 */
 export const transform = Symbol("transform");

 Object.prototype[transform] = function<T> (callback: (self: any)=>T): T {
	return callback.call(this,this);
 }

declare global {
	interface Object {
		[cascade]<T>(this: T, callback: (this: T, self: T)=>any): T;
		[transform]<I, O>(this: I, callback: (this: I, self: I)=>O): O;
	}
}