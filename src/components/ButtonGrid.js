import React from 'react';

const ButtonGrid = ({footballerOptions, handleAnswerClick}) => {
    return (
        <div>
            {footballerOptions.map((footballer, index) => {
                return (
                    <button onClick={handleAnswerClick} key={index} name={footballer.name}>{footballer.name}</button>
                )
            })}
        </div>
    );
};

export default ButtonGrid;
