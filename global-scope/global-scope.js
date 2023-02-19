var a = 1;

function varFunction() {
	console.log("global a inside var function: " + a);
	var a = 4;
	console.log("local a inside var function: " + a);
}
varFunction();


let b = 2;

function letFunction() {
	console.log("global b inside let function: " + this.b);
	var b = 5;
	console.log("local b inside let function: " + b);
}
letFunction();


const c = 3; 

function constFunction() {
	console.log("global c inside const function: " + c);
	console.log("local c inside const function: " + c);
}
constFunction();