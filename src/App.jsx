import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from "./pages/Form/Form";
import Home from "./pages/Home";
import NotFound from './pages/NotFound/NotFound';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Form/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
