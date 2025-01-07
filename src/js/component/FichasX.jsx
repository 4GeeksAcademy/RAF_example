import PropTypes from "prop-types";
import React from "react";

const FichasX = ({ ficha, handleClick, position }) => {
    return (
        <>
            <p className="fichas Ficha-X" onClick={() => { handleClick(position) }}>{ficha}</p>
        </>
    )
}

export default FichasX