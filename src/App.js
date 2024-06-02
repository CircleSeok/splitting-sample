import logo from './logo.svg';
import './App.css';
import notify from './notify';
import loadable from '@loadable/component';
import React, { Suspense, useState } from 'react';
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading ... </div>,
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div>
      <p onClick={onClick} onMouseOver={onMouseOver}>
        Hello React!
      </p>

      {visible && <SplitMe />}
    </div>
  );
}

export default App;
