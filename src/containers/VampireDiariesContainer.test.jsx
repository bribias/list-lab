import dotenv from 'dotenv';
dotenv.config();

import React from 'react';
import { render, screen } from '@testing-library/react';
import VampireDiariesContainer from './VampireDiariesContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

//mocking the API
const server = setupServer(
    rest.get('https://vampire-diaries.herokuapp.com/api/characters', (req, res, ctx) => {
        return res(
            ctx.json({
                results: [
                    {
                        id: 1,
                        name: 'Elena Gilbert',
                        actor: 'Nina Dobrev',
                        episodeCount: 134,
                    },
                ],
            })
        );
    })
);

describe('VampireDiariesContainer', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('renders a list of characters', async () => {
        render(<VampireDiariesContainer />);

        screen.getAllByAltText('loading spinner');

        const ul = await screen.findByRole('list', { name: 'characters' });
        expect(ul).toMatchSnapshot();
    });
});