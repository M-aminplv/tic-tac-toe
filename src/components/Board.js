import { useEffect, useRef, useState } from "react";
import classes from "./Board.module.css";

function Board() {
	const [cells, setCells] = useState(Array(9).fill(""));
	const [isXTurn, setIsXTurn] = useState(true);
	const [status, setStatus] = useState("");

	console.log(cells);

	function Cell({ value, onClick }) {
		return (
			<div className={classes.cell} onClick={onClick}>
				{value}
			</div>
		);
	}

	function getWinner(Cell) {
		const winningPaterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < winningPaterns.length; i++) {
			const [x, y, z] = winningPaterns[i];
			if (cells[x] && cells[x] === cells[y] && cells[x] === cells[z]) {
				return cells[x];
			}
		}
		return null;
	}

	function handleClick(getCurrentCell) {
		let cpyCell = [...cells];
		if (getWinner(cpyCell) || cpyCell[getCurrentCell]) return;
		cpyCell[getCurrentCell] = isXTurn ? "X" : "O";
		setIsXTurn(!isXTurn);
		setCells(cpyCell);
	}

	useEffect(() => {
		console.log(cells);
		if (!getWinner(cells) && cells.every((item) => item !== "")) {
			setStatus(`This is a draw! Please restart the game.`);
		} else if (getWinner(cells)) {
			setStatus(`Winner is ${getWinner(cells)}. Please restart the game`);
		} else {
			setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
		}
	}, [cells, isXTurn]);

	return (
		<div className={classes.container}>
			<h1>{status}</h1>
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
