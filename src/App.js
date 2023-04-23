

import NavBar from './components/NavBar/NavBar';
import ItemContainer from './components/ItemContainer/ItemContainter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemContainer greeting={"Bienvenidos a Carola's Home"}/>
    </div>
  );
}

export default App;
