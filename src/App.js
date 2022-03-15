import './App.css';
import React from 'react';
import ModalCom from './Component/ModalCom';
import Fart from './Component/Fart';
import NavBar from './Component/NavBar';


function App() {

  const [currItem, setCurrItem] = React.useState('home');
  const toggleItem = (item) => {
    setCurrItem (item)
  } 

  return (
    <>
      <NavBar toggleItem={toggleItem} />
      <div className="container" style={{ position: 'fixed', left: "40%", top: '50%' }}>
        {currItem === 'fun' && <div>
          <ModalCom ></ModalCom>
          <Fart></Fart>
        </div>}
      </div>
    </>
  );
}

export default App;
