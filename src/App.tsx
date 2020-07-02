import React from 'react';
import './App.css';
import Lazy from './lazy';

const App: React.FC = () => {
  const placeholder="https://picsum.photos/id/237/500/300"

  const generateImg=()=>`https://picsum.photos/id/${Math.floor(Math.random() * 999)}/500/300`

  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
      <Lazy placeholder={placeholder} src={generateImg()} ratio={0.1}/>
      <Lazy placeholder={placeholder} src={generateImg()} ratio={0.1}/>
      <Lazy placeholder={placeholder} src={generateImg()} ratio={0.1}/>
      <Lazy placeholder={placeholder} src={generateImg()} ratio={0.1}/>
      <Lazy placeholder={placeholder} src={generateImg()} ratio={0.1}/>
      <Lazy placeholder={placeholder} src={generateImg()} ratio={0.1}/>
      </div>
      </header>
    </div>
  );
}

export default App;
