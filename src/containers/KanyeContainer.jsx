import React, { Component } from 'react';
import { findQuotes } from '../services/kanyeApi';
import QuoteList from '../components/quotes/QuoteList';

export default class KanyeContainer extends Component {
    state = {
        loading: true,
        quotes: [],
    };

    componentDidMount() {
        findQuotes().then((quotes) => this.setState({ quotes, loading: false })
        );
    }
    
    render() {
        const { loading, quotes } = this.state;

        if(loading) {
            return (
                <im src="https://wirdd.in/kanye/gifs/head.gif" alt="kanye head loading spinner" />
            );
        }
        return <QuoteList quotes={quotes} />;
        }
    }