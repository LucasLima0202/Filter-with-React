// resolve as rotas do site
import Home from 'pages/Home'
import MenuScrap from 'pages/MenuScrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' //permite acessar wiwndo.location.pathname


export default function AppRouter(){
    return(
        <Router>
            <Routes> 
                <Route path='/' element={<Home/>} />
                <Route path='/menu' element={<MenuScrap/>} />
            </Routes>
        </Router>
    );
}