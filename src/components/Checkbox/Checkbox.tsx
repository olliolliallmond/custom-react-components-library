import React, { useState } from 'react';
// import './Checkbox.css';
import './Checkbox.scss';

export interface CheckboxProps {
	label: string;
	checked?: boolean;
	id: string;
}

const Checkbox = ({ label, checked, id, ...props }: CheckboxProps) => {
	const defaultChecked = checked ? checked : false;
	const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);
	return (
		<div className='checkbox-wrapper'>
			<input
				type='checkbox'
				name=''
				id={id}
				checked={isChecked}
				onChange={() => setIsChecked((prev) => !prev)}
				{...props}
			/>
			<label htmlFor={id} className={isChecked ? 'checked' : ''}>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
