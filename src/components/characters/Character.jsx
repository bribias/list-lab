import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, actor, episodeCount }) => {
    <>
        <p>{name}</p>
        <p>{image}</p>
    </>
};

Character.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Character;