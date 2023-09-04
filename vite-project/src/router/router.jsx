import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home.jsx';

import Cities from '../pages/Cities.jsx';

import Main from '../layout/Main.jsx'

import City from '../pages/City.jsx'

import {useParams} from 'react-router-dom'

import Login from '../pages/Login.jsx'

import Itinerary from '../pages/Itinerary.jsx'

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
                element: <Itinerary/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/itineraries/:id',
                element:<Itinerary/>
            }
        ]
        
    },
    
    
]);
export default router;