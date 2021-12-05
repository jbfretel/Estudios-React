import './App.css';

// Components
import Header from './components/Header';
import Person from './components/Person';

function App() {
  return (
    <>
      <Header/>
      <Person name="Carlos" age={28} birthday={new Date(1994,5,4)}/>
      <Person name="Martha" age={31} birthday={new Date(1990,4,25)}/>
      <Person name="Emilia" age={53} birthday={new Date(1968,7,14)}/>
    </>
    
  );
}

export default App;
