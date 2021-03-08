import './App.css';
import TodoList from './components/TodoList';

// 1. add todo
// 2. display todos
// 3. cross off todo
// 4. show number of active todos
// 5. filter all/active/complete
// 6. delete todo
// 7. delete all complete
//   7.1 only show if atleast one is complete
// 8. button to toggle all on/off

function App() {
  return (
    <div className="app">
      <TodoList />
    </div>
  );
}

export default App;
