import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { v4 as uuid} from 'uuid';

// Components
import Editor from './components/Editor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Editor />} />
    </Routes>
    </Router>
  );
}

export default App;
