import React from "react";


const FichasVacias = ({ x, y, updateBoard }) => {
    const handleClick = () => {
        console.log("a ver");
        updateBoard(x, y)

    }

    return (

        <div onClick={handleClick}></div>
    )
}

export default FichasVacias