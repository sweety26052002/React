import logo from './logo.svg';
import './App.css';
import {store} from './Store';
import {Provider} from 'react-redux'; 
// import  provider  from '@reduxjs/toolkit';
function App() {
  
  return (
   <Provider store={store}>
    <div className="App">
    
    </div>
    </Provider>
   
  );
}
export default App;
