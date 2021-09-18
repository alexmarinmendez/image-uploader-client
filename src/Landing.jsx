import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <Link to="/offer">POST Offer</Link> | <Link to="/product">POST Product</Link>
        </>
    );
};

export default Landing;