import React from 'react';
import { render, screen } from '@testing-library/react';
import KanyeContainer from './KanyeContainer';

describe('KanyeContainer', () => {
    it('should render a list of quotes to the page', async () => {
        render(<KanyeContainer />);

        screen.getAllByAltText('kanye head loading spinner');

        const ul = await screen.findByRole('list', { quote: 'quotes' });
        expect(ul).toMatchSnapshot();
    })
})