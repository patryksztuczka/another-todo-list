import React, {useState} from 'react'
import shortid from 'shortid'

function TodoForm({ onSubmit }) {
	const [text, setText] = useState("");

	const handleInput = (e) => {
		setText(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(text === ""){
			alert("Type todo...")
		} else {
			onSubmit({
				id: shortid.generate(),
				text: text,
				complete: false
			})
			setText("");
		}
	}

	return (
		<div>
			<form>
				<input
					onChange={handleInput}
					value={text} 
					type="text"
				/>
				<button 
					onClick={handleSubmit}
					type="submit">
					add todo
				</button>
			</form>
		</div>
	)
}

export default TodoForm
