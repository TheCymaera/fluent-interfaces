///<reference lib="es2015"/>
//@ts-check

class MyClass {
	allGood1 = false;
	allGood2 = false;

	method1() {
		this.allGood1 = true;
		return this;
	}
}

import { cascade, transform } from "./dst/index.js";
console.log("=".repeat(20));
console.log(
	"All good:",
	new MyClass()
	.method1()
	[cascade](self=>self.allGood2 = true)
	[transform](self=>self.allGood1 && self.allGood2),
);
console.log("=".repeat(20));