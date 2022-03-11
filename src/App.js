import logo from './logo.svg'
import Card from './Components/Card'
import Form from './Components/OnChange'
import './App.scss'


function Header (){
  return(
    <header>This is a header
      <h3>Links</h3>
    </header>
    
  )
}
// 2a. Que tenga un logo al lado izquierdo con el nombre "Kodemia" a su derecha, y al lado derecho que sea una lista de links: "Home, About, Projects", y tu Nombre

function Footer(){
  return (
    <footer>Kodemia ©️ 2022, Developed with 🤍 by Erick </footer>
  )
}

function Layout (props){

  return(
    <div id="layout">
      <Header name={props.name}/>
      {props.children}
      <Footer/>
    </div>
  )
}

function PageTitle(props) {
  return(
    <h2 style={{ backgroundColor: 'blue'}}> {props.children} </h2>
  )
}

function App() {
  
  return (
    <div className="App-header">
        <Card price='$ 100' name='Audifonos' img=' http ruta' description='This is a description'/>
        <Card price='$ 200' name='Baterias' />
        <Card price='$ 500' name='USB Cable'/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
