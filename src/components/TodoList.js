import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
	
	const [todoItems, setTodoItems] = useState([]);
	const [todosToShow, setTodosToShow] = useState("all");
	const [toggleAll, setToggleAll] = useState(true);

	const addTodo = (todo) => {
		setTodoItems([todo, ...todoItems]);
	}

	const toggleComplete = (id) => {
		setTodoItems(todoItems.map(todo => {
			if(todo.id === id){
				return {
					id: todo.id,
					text: todo.text,
					complete: !todo.complete
				}
			} else {
				return todo;
			}
		}))
	}

	const handleTodosToShow = (e) => {
		setTodosToShow(e.target.value)
	}

	const handleDelete = (id) => {
		setTodoItems(todoItems.filter(todoItem => todoItem.id !== id))
	}

	const handleDeleteAllComplete = () => {
		setTodoItems(todoItems.filter(todoItem => !todoItem.complete))
	}

	const toggleAllComplete = () => {
		setTodoItems(todoItems.map(todoItem => {
			setToggleAll(!toggleAll);
			return {
				...todoItem,
				complete: toggleAll
			}
		}))
	}

	let todosToRender = [];

	if(todosToShow === "all"){
		todosToRender = todoItems;
	} else if(todosToShow === "active"){
		todosToRender = todoItems.filter(todoItem => !todoItem.complete);
	} else if(todosToShow === "complete"){
		todosToRender = todoItems.filter(todoItem => todoItem.complete);
	}

	return (
		<div>
			<TodoForm onSubmit={addTodo} />
			<p>Active todos: {todoItems.filter(todoItem => !todoItem.complete).length}</p>
			<div>
				<button onClick={handleTodosToShow} value="all">all</button>
				<button onClick={handleTodosToShow} value="active">active</button>
				<button onClick={handleTodosToShow} value="complete">complete</button>
				<button onClick={toggleAllComplete}>toggle all complete: {`${toggleAll}`}</button>
				{todoItems.filter(todoItem => todoItem.complete).length ? <button onClick={handleDeleteAllComplete}>delete all complete</button> : null}
			</div>
			{todosToRender.map(todoItem	=> (
				<Todo 
					key={todoItem.id} 
					text={todoItem.text} 
					toggleComplete={() => toggleComplete(todoItem.id)} 
					todo={todoItem} 
					onDelete={() => handleDelete(todoItem.id)}
				/>
			))}
		</div>
	)
}

export default TodoList
