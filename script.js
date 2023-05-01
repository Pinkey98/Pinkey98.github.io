let equation = '';
let visible_equation='';
let result = '';

function appendToEquation(value) {
  equation = equation.toString();
  visible_equation = visible_equation.toString();
  let var1=equation.slice(-1);
  //window.alert(var1);
  if (value === '**' && equation.slice(-1) === '*') {
    return;
  }
  if (value === '.' && equation.slice(-1) === '.') {
    return;
  }
  if (value === '/' && equation.slice(-1) === '/') {
    return;
  }
  if (value === '*' && equation.slice(-1) === '*') {
    return;
  }
  if (value === '+' && equation.slice(-1) === '+') {
    return;
  }
  if (value === '-' && equation.slice(-1) === '-') {
    return;
  }
  if (value === '(' && equation.slice(-1) === ')') {
    return;
  }
  if (value === ')' && !equation.includes('(')) {
    return;
  }
  if (equation === '' && (value === '/' ||value === ')' || value === '**')) {
    return;
  }
  equation += value;
  if(value === '**'){
	visible_equation += '^';
	}
  else {
	visible_equation  += value;
	}
  document.getElementById('equation').value = visible_equation;
  try {
    result = eval(equation);
    document.getElementById('result').value = '= '+result;
  } catch (error) {
    let test='';
  }
}

function clearEquation() {
  equation = '';
 visible_equation='';
  result = '';
  document.getElementById('equation').value = '';
  document.getElementById('result').value = '0';
}

function backspace() {
  if(equation.slice(-2) === '**'){
	equation = equation.slice(0, -2);
	}
  else{
 	 equation = equation.slice(0, -1);
	}
  visible_equation = visible_equation.slice(0, -1);
  document.getElementById('equation').value = visible_equation;
  try {
    result = eval(equation);
    if (result === undefined)
    {
      document.getElementById('result').value = '0';
    }
    else{
    document.getElementById('result').value = '= '+result;
    }
  } catch (error) {
    let test='';
  }
}

function calculate() {
  try {
    result = eval(equation);
    visible_equation = result;
    equation = result;
    document.getElementById('result').value = '= '+result;
    document.getElementById('equation').value = result;
   } catch (error) {
    alert('Invalid equation');
    clearEquation();
  }
}