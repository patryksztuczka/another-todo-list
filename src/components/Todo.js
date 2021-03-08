import React from 'react'

function Todo({text, toggleComplete, todo, onDelete}) {
	return (
		<div style={{display: "flex", justifyContent: "center", marginTop: "5px"}}>
			<div onClick={toggleComplete} style={{textDecorationLine: todo.complete ? "line-through" : ""}}>
				{text}
			</div>
			<button onClick={onDelete}>x</button>
		</div>
	)
}

export default Todo
