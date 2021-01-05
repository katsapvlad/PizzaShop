function add(id) {	
	alert('You add pizza with id:' + id);
}

function something() {
	var x = window.localStorage.getItem('aaa');
	x=x*1+1;
	window.localStorage.setItem('aaa', x);
	alert(x);
}
