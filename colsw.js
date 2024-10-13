// when a particular list item is selected, call a specific function


document.getElementById('btn1').onclick=colfs1;
document.getElementById('btn2').onclick=colfs2;
document.getElementById('btn3').onclick=colfs3;
document.getElementById('btn4').onclick=colfs4;

function colfs1(){
	//NOT Working--> document.getElementByTagName('body')[0].style.backgroundColor='#dbe4f0';
	document.getElementById('b1').style.backgroundColor='#dbe4f0';
}

function colfs2(){
	document.getElementById('b1').style.backgroundColor='#c9e8d8';
}

function colfs3(){
	document.getElementById('b1').style.backgroundColor='#e8c9d8';
}

function colfs4(){
	document.getElementById('b1').style.backgroundColor='#e8e5c9';
}


