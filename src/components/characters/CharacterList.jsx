import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => (
    <ul aria-label="characters">
        {characters.map((character) => (
            <li key={character.id}>
                <Character
                    name={character.name}
                    actor={character.actor}
                    epsiodeCount={character.epsiodeCount}
                />
            </li>
        ))}
    </ul>
);

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        actor: PropTypes.string.isRequired,
        epsiodeCount: PropTypes.number.isRequired,
    })
    ).isRequired,
};

export default CharacterList;