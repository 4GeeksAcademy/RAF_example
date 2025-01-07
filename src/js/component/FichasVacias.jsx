import React from "react";


const FichasVacias = ({ ficha, handleClick, position }) => {


    return (

        <div className="x-100 h-100" onClick={() => {
            console.log("click");

            handleClick(position)
        }}></div>
    )
}

export default FichasVacias