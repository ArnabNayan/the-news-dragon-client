import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus, unde possimus illum voluptates a molestias sint eos natus eius quidem aliquam dignissimos ad omnis beatae animi qui quasi? Qui.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;