import React from 'react';
import Main from "./components/Main/Main.js";
import Menubar from "./components/Menubar/Menubar.js";
import Modal from "./components/Modal/Modal.js";
import './App.css';
import 'normalize.css';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <Menubar></Menubar>
          <Main>
            <Modal></Modal>
          </Main>
        </div>
      </div>
    </div>
  );
}

export default App;
