import './App.css';
import Hello from './component/Hello';
import styles from './App.module.css'


function App() {
  return (
    <div className="App">
      {/* <Hello></Hello> */} 
      {/* 중간에 들어갈 내용이 없을 때는 self close 해 주는 게 깔끔하다. */}
      <Hello /> 
      <div className='box'>App</div>

    </div>
  );
}

export default App;
