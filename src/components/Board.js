import { useRef, useState } from "react";
import classes from "./Board.module.css";

function Board() {
	
	const [cells, setCells] = useState(Array(9).fill(""));
	const [isXTurn, setIsXTurn] = useState(true);

	console.log(cells);

	function Cell({ value, onClick }) {
		return (
			<div className={classes.cell} onClick={onClick}>
				{value}
			</div>
		);
	}

	function handleClick(getCurrentCell) {
		let cpyCell = [...cells];
		if(cpyCell[getCurrentCell]) return ;
		cpyCell[getCurrentCell] = isXTurn ? "X" : "O";
		setIsXTurn(!isXTurn);
		setCells(cpyCell);
	}

	return (
		<div className={classes.container}>
			<div className={classes.borad}>
				<Cell value={cells[0]} onClick={() => handleClick(0)} />

				<Cell value={cells[1]} onClick={() => handleClick(1)} />

				<Cell value={cells[2]} onClick={() => handleClick(2)} />

				<Cell value={cells[3]} onClick={() => handleClick(3)} />

				<Cell value={cells[4]} onClick={() => handleClick(4)} />

				<Cell value={cells[5]} onClick={() => handleClick(5)} />

				<Cell value={cells[6]} onClick={() => handleClick(6)} />

				<Cell value={cells[7]} onClick={() => handleClick(7)} />

				<Cell value={cells[8]} onClick={() => handleClick(8)} />
			</div>
		</div>
	);
}

export default Board;
