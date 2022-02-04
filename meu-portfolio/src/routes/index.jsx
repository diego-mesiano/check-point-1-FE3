import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Radar from '../pages/Radar'
import Home from '../pages/Home';

const RouteList = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/radar-crypto" element={<Radar/>}/>

        </Routes>
    </BrowserRouter>
)

export default RouteList;