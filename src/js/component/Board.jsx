import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import FichasX from "./FichasX";
import FichasVacias from "./FichasVacias";






const turns = {
    X : "X",
    O : "O"
}


const Board = () => {

   // const [playerOne, setPlayerOne] = useState(false);
    //const [playerTwo, setPlayerTwo] = useState(false);
    const [matrix, setMatrix] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
    const [turn, setTurn] = useState(turns.X);
    
    //estado para que inicie el juego
   /* const PlayerVsPlayer = () => {
        setPlayerOne(true)
        setPlayerTwo(false)
    };*/

   const updateBoard = (index, index1)  =>{
      const newBoard = [...matrix]
      newBoard[index][index1] = turn
      setMatrix(newBoard)
        
      const newTurn = turn === turns.X ? turns.O : turns.X
      setTurn(newTurn)
    };

    const handleClick = (fila, columna)=>{
        updateBoard(fila, columna)
        console.log("lo que sea");
        
    };
    

      

    return (
        <div className="container-fluid rounded-3">
            <div className="board">
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        {matrix[0][0] != "" ? <FichasX ficha={matrix[0][0]} /> : <FichasVacias x={0} y={0} updateBoard={updateBoard}/>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[0][1] != "" ? <FichasX ficha={matrix[0][1]} /> : <FichasVacias/>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[0][2] != "" ? <FichasX ficha={matrix[0][2]} /> : <FichasVacias/>}
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        {matrix[1][0] != "" ? <FichasX ficha={matrix[1][0]} /> : <FichasVacias/>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[1][1] != "" ? <FichasX ficha={matrix[1][1]} /> : <FichasVacias/>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[1][2] != "" ? <FichasX ficha={matrix[1][2]} /> : <FichasVacias/>}
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        {matrix[2][0] != "" ? <FichasX ficha={matrix[2][0]} /> : <FichasVacias/>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[2][1] != "" ? <FichasX ficha={matrix[2][1]} /> : <FichasVacias/>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[2][2] != "" ? <FichasX ficha={matrix[2][2]} /> : <FichasVacias/>}
                    </div>
                </div>
            </div>

           {/* <div className="Select_Game">
                <button onClick={PlayerVsPlayer} type="button">Start Game</button>
                <button onClick={chooseRandom} type="button">Choose Piece</button>
            </div> */}          
        </div>




    )
}

export default Board;