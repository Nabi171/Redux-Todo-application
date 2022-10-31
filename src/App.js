import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import TodosApp from './components/Todo/TodosApp';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <TodosApp></TodosApp>
    </div>
  );
}

export default App;
