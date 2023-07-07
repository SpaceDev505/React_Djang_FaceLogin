
import './App.scss';
import SignIn from './pages/Auth/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/Auth/SignUp';
import ViewUsers from './pages/Auth/ViewUsers';
function App() {
  return (
    <Routes>
      <Route path='/signin' element = {<SignIn />}/>
      <Route path='/signup' element = {<SignUp />}/>
      <Route path='/view' element =  {<ViewUsers />}/>
    </Routes> 
  );
}

export default App;
