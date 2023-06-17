import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateNewBoard from './components/CreateNewBoard';
import DashBoard from './components/DashBoard';

function App() {  
  return (
    <div >
      <Routes>
        <Route
          path='/'
          element={<DashBoard />}
        />
        <Route
          path='/newboard'
          element={<CreateNewBoard />}
        />
      </Routes>
    </div>
  );
}

export default App;
