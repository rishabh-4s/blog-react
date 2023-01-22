// import logo from './logo.svg';
// import './App.css';
import Navbar from './navbar';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        {/* <h1>App component</h1> */}
        <Home/>
      </div>
    

    </div>
  );
}

export default App;
