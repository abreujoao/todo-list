import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="todo-app">TODO-APP</Link>
          </li>
          <li>
            <Link to="rota-protegida">ROUTER-PROTECTED</Link>
          </li>
          <li>
            <Link to="login">LOGIN</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
