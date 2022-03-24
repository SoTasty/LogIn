import { useSelector } from 'react-redux';
import  LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  ProfilePage from './components/ProfilePage/ProfilePage';

function App() {
  const state = useSelector(state => state.auth)
  return (
    <div className="App">
      <Routes>
          <Route path='/profile' element={<ProfilePage login={state.login} />} />
            
          <Route path='/' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
