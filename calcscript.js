function clickInput() {
	if ('+-/*'.indexOf(event.target.innerHTML) > -1 && '+-/*'.indexOf(document.getElementsByTagName('input')[0].value.slice(-1)) > -1) {
		del();
	}
	if (document.getElementsByTagName('input')[0].value == '' && '+-/*.'.indexOf(event.target.innerHTML) > -1) {
		return;
	}
	if (document.getElementsByTagName('input')[0].value.length == 1 && document.getElementsByTagName('input')[0].value.slice(-1) == '0' && '123456789'.indexOf(this.innerHTML) > -1) {
		del();
	}
	if (document.getElementsByTagName('input')[0].value == 'Error!') {
		clear();
	}
	if (event.target.innerHTML == 'C' || event.target.innerHTML == 'CL' || event.target.innerHTML == '=') {
		return;
	}
	document.getElementsByTagName('input')[0].value += event.target.innerHTML;
}

function calculate() {
	if ('+-/*='.indexOf(document.getElementsByTagName('input')[0].value.slice(-1)) > -1) {
		del();
	}
	if (document.getElementsByTagName('input')[0].value == '') 
		return;
	if (document.getElementsByTagName('input')[0].value == 'Error!') {
		clear();
		return;
	}
	try {
		value = eval(document.getElementsByTagName('input')[0].value);
	}
	catch(err){
		alert(err);
	}
	if (isNaN(value) || value == Infinity || value == -Infinity) {
		value = 'Error!';
		document.getElementsByTagName('input')[0].style.backgroundColor = '#F08080';
	}
	if (value.toString().indexOf('99999') > 0 && value.toString().indexOf('.')) {
		value = value.toFixed(value.toString().indexOf('99999') - parseInt(value).toString().length - 1)
	}
	if (value.toString().indexOf('00000') > 0 && value.toString().indexOf('.')) {
		value = value.toFixed(value.toString().indexOf('00000') - parseInt(value).toString().length - 1)
	}
	document.getElementsByTagName('input')[0].value = value;
}

function clear() {
	document.getElementsByTagName('input')[0].value = '';
	document.getElementsByTagName('input')[0].style.backgroundColor = '#B0E0E6';
}

function del() {
	if (document.getElementsByTagName('input')[0].value.length == 0) 
		return;
	document.getElementsByTagName('input')[0].value = document.getElementsByTagName('input')[0].value.substring(0, document.getElementsByTagName('input')[0].value.length - 1)
}

function keyOps(event) {
	if (event.key == '/') {
		event.preventDefault();
	}
	if (event.key.length == 1 && /[0-9]/.test(event.key)) {
		if (document.getElementsByTagName('input')[0].value == 'Error!')
			clear();
		document.getElementsByTagName('input')[0].value += event.key;
	}
	if ('+-/*.=()'.indexOf(event.key) > -1) {
		if (document.getElementsByTagName('input')[0].value == '') {
			return;	
		}
		if ('+-/*=().'.indexOf(document.getElementsByTagName('input')[0].value.slice(-1)) > -1) {
			del();
		}
		if (document.getElementsByTagName('input')[0].value == 'Error!') {
			clear();
		}
		document.getElementsByTagName('input')[0].value += event.key;
	}
	if (event.key == 'Delete') {
		clear();
	}
	if (event.key == 'Backspace') {
		del();
	}
	if (event.key == 'Enter')
		calculate();
}

function keyOn(event) {
	if (/[0-9]/.test(event.key) && event.key.length == 1) {
		document.getElementById(event.key).style.backgroundColor = '#EEE8AA';
	}
}

function keyOff(event) {
	if (/[0-9]/.test(event.key) && event.key.length == 1) {
		document.getElementById(event.key).style.backgroundColor = '#FFFFE0';
	}
 }

function clickOn() {
	event.target.style.backgroundColor = '#EEE8AA';
}

function clickOff() {
	event.target.style.backgroundColor = '#FFFFE0';
}

document.getElementById('keys').addEventListener('click', clickInput);
document.getElementById('keys').addEventListener('mousedown', clickOn);
document.getElementById('keys').addEventListener('mouseup', clickOff);
document.addEventListener('keydown', keyOn);
document.addEventListener('keyup', keyOff);
document.addEventListener('keydown', keyOps);
document.getElementById('result').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('del').addEventListener('click', del);