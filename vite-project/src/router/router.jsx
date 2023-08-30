import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home.jsx';

import Cities from '../pages/Cities.jsx';

import Main from '../layout/Main.jsx'

import City from '../pages/City.jsx'

import {useParams} from 'react-router-dom'

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
            
            },
            {
                path:'/cities/:id',
                element: <City/>
            }
        ]
        
    },
    
    
]);
export default router;