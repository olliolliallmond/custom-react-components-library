import React, { useRef } from "react";
import './TextInput.scss';

export interface TextInputProps {
	label: string;
	name: string;
	placeholder: string;
	value: string;
	errors: boolean;
	onChange: () => void;
	required?: boolean;
}

const TextInput = ({ label, name, placeholder, value, errors, onChange, required, }: TextInputProps) => {
	const inputRef = useRef(null);

	const handleClick = () => {
		if (inputRef && inputRef.current) {
			// inputRef.current.focus();
		}
	};

	return (
		<div className='field'>
			<label htmlFor={name}>{label}</label>
			<input
				ref={inputRef}
				arial-label={name}
				tabIndex={0}
				name={name}
				type='text'
				onChange={onChange}
				placeholder={placeholder}
				value={value}
				required={required}
				onClick={handleClick}
			/>
			{errors && !value && required && <p>Can't be empty</p>}
			{}
		</div>
	);
};

export default TextInput;