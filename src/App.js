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
									if(item === 'C'){
										setOperand1('0');
										setOperator('');
										setOperand2('');
									} else if(item === '+' || item === '-'){
										setOperand1(operand1);
										setOperator(item)
									} else if (item === '='){
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
