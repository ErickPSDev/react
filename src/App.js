import logo from './logo.svg'
//import './App.scss'
import Home from './Views'


// 2a. Que tenga un logo al lado izquierdo con el nombre "Kodemia" a su derecha, y al lado derecho que sea una lista de links: "Home, About, Projects", y tu Nombre

function Footer(){
  return (
    <footer>Kodemia ©️ 2022, Developed with 🤍 by Erick </footer>
  )
}

function Layout (props){

  return(
    <div id="layout">
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
        <Home/>
    </div>
  );
}

export default App;
