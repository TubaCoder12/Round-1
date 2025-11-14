import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col md:flex-row bg-gray-400 min-h-screen p-4 gap-4">
        <Routes>
          <Route path="/" element={<Home />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
