import React from 'react';
import Provider from './ContextApi/Provider';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import './App.css';


function App() {
  return (
  <Provider>
<>
<FirstPage/>
<SecondPage/>
  </>
    </Provider>
  );
}

export default App;
