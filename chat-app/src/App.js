import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Join} />
          <Route path="/chat" Component={Chat}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
