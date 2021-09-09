import React, { Component } from 'react';
import { findCharacters } from '../services/vampireDiariesApi';
import CharacterList from '../components/characters/CharacterList';

export default class VampireDiariesContainer extends Component {
    state = {
        loading: true,
        characters: [],
    };

    componentDidMount() {
        findCharacters().then((characters) => this.setState({ characters, loading: false })
        );
    }

    render() {
        const { loading, characters } = this.state;

        if (loading) {
            return (
                <img src="https://wirdd.in/kanye/gifs/head.gif" alt="kanye head spinner" />
            );
        }
        return <CharacterList characters={characters} />
    }
}