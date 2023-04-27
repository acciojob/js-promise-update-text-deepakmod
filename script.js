//your JS code here. If required.
let div=document.getElementById("output");
function promiseCreation(){
	let promise=new Promise((resolve)=>{
		setTimeout(()=>{resolve("Hello,world")},1000);
	});
	promise.then(updateFunction);
	function updateFunction(str){
		div.textContent=str;
	}
}