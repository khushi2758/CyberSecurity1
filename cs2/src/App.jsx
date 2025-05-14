import{RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Tools from './pages/Tools'
import RootLayout from './pages/Root';
import Tos from './pages/Tos';
import Update from './pages/Update';
function App() {
  const router = createBrowserRouter([
    {path:'/', element:  <RootLayout/>, children: [
      {index:true, element : <Home />},
      {path:"Home", element : <Home />},
      {path: '/Tools', element : <Tools/>},
      {path: '/Tos', element : <Tos/>},
      {path: '/Update', element : <Update/>},
      


    ]
  
  },
  ]);

  return  <RouterProvider router={router}/>;
}

export default App
