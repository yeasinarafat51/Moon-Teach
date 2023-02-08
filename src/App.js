
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routs/Rout';
import Productprovider from './context/Productprovider';
import {Provider} from "react-redux"
import store from './redux/reducer/Store';

function App() {
  return (
    <div className="App">
       <Provider store={store}>
       <RouterProvider router={router} ></RouterProvider>
       </Provider>
      {/* <Productprovider>
      <RouterProvider router={router} ></RouterProvider>
      </Productprovider> */}
     
    </div>
  );
}

export default App;
