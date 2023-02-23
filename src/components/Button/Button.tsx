import React from 'react';
// import './Button.css';
import './Button.scss';

export interface ButtonProps {
	btnClass: 'big' | 'primary' | 'secondary' | 'destructive';
	text: string;
	type?: string;
	handleClick?: () => void;
}

const Button = ({ btnClass, text, type, handleClick }: ButtonProps) => {
	const action = type && type.toLowerCase() === 'submit' ? 'submit' : 'button';

	return (
		<button type={action} className={btnClass} onClick={handleClick}>
			{text}
		</button>
	);
};

export default Button;
