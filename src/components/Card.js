import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/Card.module.css'
import AboutMe from '../components/AboutMe';
import QuoteBox from '../components/QuoteBox';

function Card ( {ronism, getQuote} ) {

    return (
        <div className={styles.card}>
            <AboutMe name='Zhenqi Xu' food='lobster' number={5} />
            <QuoteBox ronism={ronism} getQuote={getQuote}/>
        </div>
    )
}

Card.propTypes = {
    ronism: PropTypes.string,
    getQuote: PropTypes.func.isRequired,
}

export default Card;