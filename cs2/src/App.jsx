import{RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './pages/Root';
function App() {
  const router = createBrowserRouter([
    {path:'/', element:  <RootLayout/>, children: [
      {index:true, element : <Home />},
    

    ]},
  ]);

  return  <RouterProvider router={router}/>;
}

export default App
