import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

const QuoteList = ({ quotes }) => (
    <ul aria-label="quotes">
        {quotes.map((quote) => (
            <li key={quote.id} >
                <Quote
                    quote={quote.quote}
                />
            </li>
        ))}
    </ul>
);

QuoteList.propTypes = {
    quotes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        quote: PropTypes.string.isRequired,
    })
    ).isRequired,
};

export default QuoteList;