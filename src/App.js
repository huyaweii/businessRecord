import logo from './logo.svg';
import './App.css';
import { renderRoutes } from "react-router-config"

function App({ route }) {
  return (
    <div className="App">
      {renderRoutes(route.routes)}
    </div>
  );
}

export default App;
