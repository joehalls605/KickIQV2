import React, { useState } from 'react';

const ButtonGrid = ({footballerOptions}) => {

    return (
        <div>
            {footballerOptions.map((footballer, index) => {
                <button
                key={index}
                name={footballer.name}
                >
                {footballer.name}
                </button>
            })}
        </div>
    );
};

export default ButtonGrid;
