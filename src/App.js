import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './components/DashBoard';
import PostPage from './components/PostPage';
function App() {  
  return (
    <div >
      <Routes>
        <Route
          path='/'
          element={<DashBoard />}
        />
        <Route
          path='/postpage'
          element={<PostPage/>}
        />
      </Routes>
    </div>
  );
}

export default App;
