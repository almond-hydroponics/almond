import { render } from '@testing-library/react';

import Index from './index';

describe('Modal', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Index />);
		expect(baseElement).toBeTruthy();
	});
});
