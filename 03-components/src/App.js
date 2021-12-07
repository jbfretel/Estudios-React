import './App.css';

// Components
import Header from './components/Header';
import Person from './components/Person';

function App() {
  return (
    <>
      <Header/>
      <Person   //instalar extensión vscode alphabetical sorter uso: ctrl mayus p y buscar la extensión para ordenar alfabeticamente las props, buenas practicas react.
        info={
          {
            age:28, 
            birthday:new Date(1993,5,4),
            name:"Carlos" 
          }
        }
      />
      <Person 
        info={
          {
            age:31, 
            birthday:new Date(1990,4,25),
            name:"Martha" 
          }
        }
      />
      <Person 
        info={
          {
            age:53, 
            birthday:new Date(1968,7,14),
            name:"Emilia" 
          }
        }
      />
    </>
    
  );
}

export default App;
