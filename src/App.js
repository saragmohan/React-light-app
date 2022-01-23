import { useState } from 'react';
import Light from './components/light';
import Header from './components/header';
import './App.css';

function App() {

  const [status1, setStatus1] = useState("OFF");
  const [status2, setStatus2] = useState("OFF");

  return (
    <>
      <Header />
      <div className="lightContainer ">
        <Light status={status1} onSwitch={() => setStatus1(status1 === 'OFF' ? 'ON' : 'OFF')} />
        <Light status={status2} onSwitch={() => setStatus2(status2 === 'OFF' ? 'ON' : 'OFF')} />
      </div>
    </>
  );
}

export default App;
