import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character, actor, episodeCount }) => {
    <>
        <p>{character}</p>
        <p>{actor}</p>
        <p>{epsiodeCount}</p>
    </>
};

Character.propTypes = {
    charater: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    epsiodeCount: PropTypes.number
};

export default Character;