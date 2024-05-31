import logo from './logo.svg';
import './App.css';
import notify from './notify';

function App() {
  const onClick = () => {
    import('./notify').then((result) => result.default());
  };
  return <div onClick={onClick}>hello react</div>;
}

export default App;
