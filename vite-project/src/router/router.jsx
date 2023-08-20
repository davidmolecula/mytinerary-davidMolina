import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home.jsx';

import Cities from '../pages/Cities.jsx';

import Main from '../layout/Main.jsx'

const router= createBrowserRouter([
    
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/cities',
                element: <Cities/>
            }
        ]
        
    },
    
    
]);
export default router;