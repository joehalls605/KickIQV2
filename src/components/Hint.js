import React from 'react';

const Hint = ({correctFootballer}) => {

    if (!correctFootballer) {
        return <p>No hints available.</p>;
    }

    return (
        <div>
            <p>
                <span>Club:{correctFootballer.club}</span>
            </p>
            <p>
                <span>Position:{correctFootballer.position}</span>
            </p>
            <p>
                <span>Nationality:{correctFootballer.nationality}</span>
            </p>
        </div>
    );
};

export default Hint;
