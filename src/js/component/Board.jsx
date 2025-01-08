import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import FichasX from "./FichasX";
import FichasVacias from "./FichasVacias";

const turns = {
    X: "X",
    O: "O"
}



const Board = () => {

    // const [playerOne, setPlayerOne] = useState(false);
    //const [playerTwo, setPlayerTwo] = useState(false);
    const [matrix, setMatrix] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
    const [turn, setTurn] = useState(turns.X);
    const [winPlayerOne, setWinPlayerOne] = useState(false);
    const [winPlayerTwo, setWinPlayerTwo] = useState(false);
    

    //estado para que inicie el juego
    /* const PlayerVsPlayer = () => {
         setPlayerOne(true)
         setPlayerTwo(false)
     };*/

    const probabilidades = [
        if([[0][0], [0][1], [0][2]],
        [[1][0], [1][1], [1][2]],)
    ]

    const updateBoard = (index, index1) => {
        const newBoard = [...matrix]
        newBoard[index][index1] = turn
        console.log(newBoard);
        setMatrix(newBoard)

        const newTurn = turn === turns.X ? turns.O : turns.X
        setTurn(newTurn)

        
    };

    const handleClick = (ficha) => {

        console.log(ficha);

        if (matrix[ficha[0]][ficha[1]] == "") {
            console.log("entra");

            updateBoard(ficha[0], [ficha[1]])

        }

    };




    return (
        <div className="container-fluid rounded-3">
            <div className="board">
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        {matrix[0][0] == "" ? <FichasVacias ficha={matrix[0][0]} position={[0, 0]} handleClick={handleClick} /> : <FichasX ficha={matrix[0][0]} />}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[0][1] == "" ? <FichasVacias ficha={matrix[0][1]} position={[0, 1]} handleClick={handleClick} /> : <FichasX ficha={matrix[0][1]} />}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[0][2] == "" ? <FichasVacias ficha={matrix[0][2]} position={[0, 2]} handleClick={handleClick} /> : <FichasX ficha={matrix[0][2]} />}
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        {matrix[1][0] == "" ? <FichasVacias ficha={matrix[1][0]} position={[1, 0]} handleClick={handleClick} /> : <FichasX ficha={matrix[1][0]} />}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[1][1] == "" ? <FichasVacias ficha={matrix[1][1]} position={[1, 1]} handleClick={handleClick} /> : <FichasX ficha={matrix[1][1]} />} />
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[1][2] == "" ? <FichasVacias ficha={matrix[1][2]} position={[1, 2]} handleClick={handleClick} /> : <FichasX ficha={matrix[1][2]} />}
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        {matrix[2][0] == "" ? <FichasVacias ficha={matrix[2][0]} position={[2, 0]} handleClick={handleClick} /> : <FichasX ficha={matrix[2][0]} />}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[2][1] == "" ? <FichasVacias ficha={matrix[2][1]} position={[2, 1]} handleClick={handleClick} /> : <FichasX ficha={matrix[2][1]} />}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[2][2] == "" ? <FichasVacias ficha={matrix[2][2]} position={[2, 2]} handleClick={handleClick} /> : <FichasX ficha={matrix[2][2]} />}
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