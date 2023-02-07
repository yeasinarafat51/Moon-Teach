
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routs/Rout';
import Productprovider from './context/Productprovider';

function App() {
  return (
    <div className="App">
      <Productprovider>
      <RouterProvider router={router} ></RouterProvider>
      </Productprovider>
     
    </div>
  );
}

export default App;
