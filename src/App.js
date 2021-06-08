import camelot_logo from './camelot_logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import CartWidget from './CartWidget.js'
import ItemListContainer from './ItemListContainer.js'


function App() {
  return (
    <div className="App">
      <CartWidget></CartWidget>
      <Navbar></Navbar>
      <ItemListContainer greeting="invitado"></ItemListContainer>
    </div>
  );
}

export default App;
