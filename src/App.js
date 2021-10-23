import "./App.css";
import Conversor from "./components/Conversor.jsx";

function App() {
  return (
    <div className='App'>
      <h1>Conversor de moeda</h1>
      <div className='linha'>
        <Conversor moedaA='USD' moedaB='BRL' />
        <Conversor moedaA='BRL' moedaB='USD' />
      </div>
      <div className='linha'>
        <Conversor moedaA='CAD' moedaB='BRL' />
        <Conversor moedaA='BRL' moedaB='CAD' />
      </div>
      <div className='linha'>
        <Conversor moedaA='EUR' moedaB='BRL' />
        <Conversor moedaA='BRL' moedaB='EUR' />
      </div>
      <a>
        Photo by
        <a href='https://unsplash.com/@jjying?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          JJ Ying
        </a>
        on
        <a href='https://unsplash.com/s/photos/abstract?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          Unsplash
        </a>
      </a>
    </div>
  );
}

export default App;
