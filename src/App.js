
import './App.css';
import Carts from './components/Cart/Carts';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Questions from './components/Questions/Questions';

function App() {
 
  return (
    <div className="App">
      <div>
      <Header></Header>
      <Main></Main>
     </div>
    <Questions></Questions>

      {/* <Questions></Questions> */}
    </div>
  );
}

export default App;
