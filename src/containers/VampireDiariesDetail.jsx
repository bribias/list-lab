import React, { Component } from 'react';
import { findOneCharacter } from '../services/vampireDiariesApi';
import CharacterList from '../components/characters/CharacterList';

export default class VampireDiariesDetails extends Component {
    state = {
        loading: true,
        character: [],
    };

    componentDidMount() {
        findOneCharacter().then((character) => this.setState({ character, loading: false })
        );
    }

    render() {
        const { loading, character } = this.state;

        if (loading) {
            return (
                <img src="https://wirdd.in/kanye/gifs/head.gif" alt="loading spinner"
                />
            );
        }
        return <CharacterList character={character} />
    }
}