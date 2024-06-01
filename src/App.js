import logo from './logo.svg';
import './App.css';
import notify from './notify';
import React, { Suspense, useState } from 'react';
const SplitMe = React.lazy(() => import('./SplitMe'));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  return (
    <div>
      <p onClick={onClick}>Hello React!</p>
      <Suspense fallback={<div>loading...</div>}>
        {visible && <SplitMe />}
      </Suspense>
    </div>
  );
}

export default App;
