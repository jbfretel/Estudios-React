import './App.css';

// Components
import Header from './components/Header';
import Person from './components/Person';

function App() {
  return (
    <>
      <Header/>
      <Person name="Carlos" age={28}/>
      <Person name="Martha" age={50}/>
      <Person name="Emilia" age={45}/>
    </>
    
  );
}

export default App;
