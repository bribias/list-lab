import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, actor, episodeCount }) => {
    <>
        <p>{name}</p>
        <p>{actor}</p>
        <p>{episodeCount}</p>
    </>
};

Character.propTypes = {
    name: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    episodeCount: PropTypes.number.isRequired
};

export default Character;