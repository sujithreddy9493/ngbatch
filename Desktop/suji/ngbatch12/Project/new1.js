function logo(){
	var suji=document.getElementById("mycanvas");
	var ctxt=suji.getcontext("2d");

	ctxt.font="50pt Arial";
	ctxt.fillStyle="green";
	ctxt.fillText("SUJI",10,100);
	ctxt.strokeStyle="red";
	ctxt.strokeText("SUJI",10,100);
}
window.addEventListener("load",logo,flase);