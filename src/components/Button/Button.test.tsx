import React from 'react';
// import './Button.css';
import './Button.scss';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
	test('renders the Button component', () => {
		render(<Button btnClass='big' text='Hello world!' />);
	});
});
