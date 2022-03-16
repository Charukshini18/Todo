import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
      
        <h4><u>TO-DO's</u></h4>
        <Form />
        <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;

