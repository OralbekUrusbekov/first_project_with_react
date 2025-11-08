import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Items from '../src/web/Items';
import Project from '../src/web/Project'
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import PomodoroTimer from '../src/pomodoro/PomodoroTimer';
import {onloadSocial,loadSocial,showtodo} from './api/api'
import Social from './Social/Social';
import Sociallist from './Social/Sociallist';
import Create from './Social/Create';
import Edit from './Social/Edit';
const divRoot = document.getElementById("root");
const root = ReactDOM.createRoot(divRoot);
const  App = () => {
  return (
  <>
  <h1 >Hello World</h1>
  </>
  
  )
  
}

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/pomodoro',
    element: <PomodoroTimer/>
  },

  {
    path: '/project',
    element: <Project/>,
    children: [
      {
        path: '/project/:name/:surname/:age/:university/:profession/:subject/:goals',
        element: <Items/>
      }
    ],
    errorElement: <h1>Error Oralbek</h1>

  },
  {
        path: '/socials',
        element: <Social/>,
        
        children: [
          {
            path: '/socials/:id',
            element: <Sociallist />,
            loader: async ({ params }) => onloadSocial(params.id),
            errorElement: <h2>Something went wrong. The requested item could not be found.</h2>
          }
          ]
    },
    {
      path: '/socials/type/:typeId?',
      element: <Social />
    },
    {
      path: '/socials/create',
      element: <Create/>
    },
    {
      path: '/socials/edit/:nameId',
      element: <Edit/>,
   }


])

root.render(<RouterProvider router={routes} />);