import Home from './pages/Home'
import {Route,Routes} from 'react-router-dom'
import DynamicRouter from './pages/DynamicRouter'

import './css/App.css'

function App() {
    return(
        <div >
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/news/:url' element={<DynamicRouter/>}/>

            </Routes>

        </div>
    )
  
  
}

export default App
