/* function contValue() {
	a = document.getElementsByTagName('input')[0].value;
} */

function clickInput() {
	if ('+-/*'.indexOf(this.innerHTML) > -1 && '+-/*'.indexOf(document.getElementsByTagName('input')[0].value.slice(-1)) > -1) {
		del();
	}
	if (document.getElementsByTagName('input')[0].value == '' && '+-/*'.indexOf(this.innerHTML) > -1) {
		return;
	}
	if (document.getElementsByTagName('input')[0].value.length == 1 && document.getElementsByTagName('input')[0].value.slice(-1) == '0' && '123456789'.indexOf(this.innerHTML) > -1) {
		del();
	}
	if (document.getElementsByTagName('input')[0].value == 'Error!') {
		clear();
	}
	document.getElementsByTagName('input')[0].value += this.innerHTML;
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

//
document.addEventListener('keydown', keyOps)
document.getElementById('1').addEventListener('click', clickInput);
document.getElementById('2').addEventListener('click', clickInput);
document.getElementById('3').addEventListener('click', clickInput);
document.getElementById('4').addEventListener('click', clickInput);
document.getElementById('5').addEventListener('click', clickInput);
document.getElementById('6').addEventListener('click', clickInput);
document.getElementById('7').addEventListener('click', clickInput);
document.getElementById('8').addEventListener('click', clickInput);
document.getElementById('9').addEventListener('click', clickInput);
document.getElementById('0').addEventListener('click', clickInput);
document.getElementById('dot').addEventListener('click', clickInput);
document.getElementById('plus').addEventListener('click', clickInput);
document.getElementById('minus').addEventListener('click', clickInput);
document.getElementById('divide').addEventListener('click', clickInput);
document.getElementById('multiple').addEventListener('click', clickInput);
document.getElementById('result').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('del').addEventListener('click', del);