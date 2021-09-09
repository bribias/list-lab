import React from 'react';
import PropTypes from 'prop-types'

const Quote = ({ quote }) => (
    <>
        <p>{quote}</p>
    </>
);

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
};

export default Quote;