import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldContainer from './HeyArnoldContainer';
import { MemoryRouter } from 'react-router-dom';

describe('HeyArnoldContainer', () => {
    it('renders a list of characters', async () => {
        render(<MemoryRouter><HeyArnoldContainer /></MemoryRouter>);

        screen.getAllByAltText('loading spinner');

        const ul = await screen.findByRole('list', { name: 'characters' });
        expect(ul).toMatchSnapshot();
    });
});