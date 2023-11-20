import logo from './logo.svg';
import styles from './App.module.css';
import { useState } from 'react';

export function App(){
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);
	const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const operators = ['C', '+', '-', '='];
	const output = operand1 + operator + operand2;

	return(
		<div className={styles.app}>
			<header className={styles.appHeader}>
				<img src={logo} className={styles.appLogo} alt="logo" />
			</header>
			<main className={styles.appMain}>
 				<div className={`${styles.calculatorOutput} ${isResult ? styles.result : ''}`}>{output}</div>
 				<div className={styles.calculatorKeys}>
					<div className={styles.numbers}>
						{numbers.reverse().map((item) =>
							<button
								key={item}
								className={styles.calculatorKey}
								onClick={()=>{
									setIsResult(false);
									if(operator === ''){
										if(operand1 === '0'){
											setOperand1(item);
										} else {
											setOperand1(operand1 + item)
										}
									} else {
										if(operand2 === '0'){
											setOperand2(item);
										} else {
											setOperand2(operand2 + item)
										}
									}
								}}
							>
								{item}
							</button>)}
					</div>
					<div className={styles.operators}>
						{operators.map((item) =>
							<button
								key={item}
								className={styles.calculatorOperator}
								onClick={() => {
									setIsResult(false);
									let htmlTarget = window.event.target.textContent;
									if(htmlTarget === 'C'){
										setOperand1('0');
										setOperator('');
										setOperand2('');
									} else if(htmlTarget === '+' || htmlTarget === '-'){
										setOperand1(operand1);
										setOperator(htmlTarget)
									} else if (htmlTarget === '='){
										setIsResult(true);
										if(operand2 !== ''){

											switch (operator){
												case '+': {
													setOperand1(Number(operand1) + Number(operand2));
													break;
												}
												case '-': {
													setOperand1(Number(operand1) - Number(operand2));
													break;
												}
												default:
													//
											};

											setOperand2('');
										}
										setOperator('');
									}
								}}
							>
								{item}
							</button>
						)}
					</div>
				</div>
 			</main>
		</div>
	);
};

// export function App() {
// 	let calculatorNumbers = ['C', '=', '-', '+', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 	function isEqual(item) {
// 		if (item === '=') {
// 			return ' equal-sign';
// 		} else if (item === 'C') {
// 			return ' C-sign';
// 		} else if (item === '+') {
// 			return ' operator';
// 		} else if (item === '-') {
// 			return ' operator';
// 		} else {
// 			return '';
// 		}
// 	}

// 	function getHtmlCalculator(number) {
// 		return (
// 			<button
// 				key={String(number)}
// 				type="button"
// 				className={'calculator-key' + isEqual(number)}
// 				onClick={onClick}
// 				id={String(number)}
// 			>
// 				{String(number)}
// 			</button>
// 		);
// 	}

// 	function slicedArray(array) {
// 		array.reverse();
// 		const arraySize = 3;
// 		const slicedArray = [];
// 		for (let i = 0; i < array.length; i += arraySize) {
// 			slicedArray.push(array.slice(i, i + arraySize));
// 		}
// 	}
// 	slicedArray(calculatorNumbers);

// 	let numbers = '';
// 	let num1 = '';
// 	let num2 = '';
// 	let operator = '';
// 	let result = '';

// 	function onClick(event) {
// 		const calculatorOutput = document.querySelector('.calculator__output');
// 		calculatorOutput.style.color = 'white';
// 		calculatorOutput.style.fontWeight = '400';
// 		calculatorOutput.style.textShadow = '';
// 		calculatorOutput.style.background = 'black';

// 		calculatorOutput.textContent = numbers;

// 		if (event.target.textContent === 'C') {
// 			calculatorOutput.textContent = '0';
// 			numbers = '';
// 			num1 = '';
// 			num2 = '';
// 			operator = '';
// 		} else if (event.target.textContent === '=') {
// 			num2 = numbers;
// 			if (operator === '+') {
// 				result = Number(num1) + Number(num2);
// 			} else if (operator === '-') {
// 				result = Number(num1) - Number(num2);
// 			}
// 			calculatorOutput.style.color = 'gold';
// 			calculatorOutput.style.background = 'black';
// 			num1 = '';
// 			num2 = '';
// 			numbers = '';
// 			operator = '';
// 			calculatorOutput.textContent = result || 0;
// 		} else if (event.target.textContent === '+') {
// 			num1 = numbers;
// 			calculatorOutput.textContent = event.target.textContent;
// 			operator = '+';
// 			numbers = '';
// 		} else if (event.target.textContent === '-') {
// 			num1 = numbers;
// 			calculatorOutput.textContent = event.target.textContent;
// 			operator = '-';
// 			numbers = '';
// 		} else {
// 			if (event.target.textContent !== 'C') {
// 				calculatorOutput.textContent += event.target.textContent;
// 				numbers += event.target.textContent;
// 			}
// 		}
// 	}
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 			</header>
// 			<main className="App-main">
// 				<div className="calculator__output">0</div>
// 				<div className="calculator-keys">
// 					{calculatorNumbers.map((item) => {
// 						return getHtmlCalculator(item);
// 					})}
// 				</div>
// 			</main>
// 		</div>
// 	);
// }
