import dotenv from 'dotenv';
dotenv.config();

import React from 'react';
import { render, screen } from '@testing-library/react';
import VampireDiariesContainer from './VampireDiariesContainer';
import { MemoryRouter } from 'react-router-dom';

describe('VampireDiariesContainer', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('renders a list of characters', async () => {
        await render(<MemoryRouter><VampireDiariesContainer /></MemoryRouter>);

        screen.getAllByAltText('loading spinner');

        const ul = await screen.findByRole('list', { name: 'characters' });
        expect(ul).toMatchSnapshot();
    });
});