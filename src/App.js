import "./App.css";
import BitcoinInfo from "./components/bitcoininfo/BitcoinInfo";
import BitcoinStat from "./components/bitcoinstat/BitcoinStat";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
     <Navigation/>
     <BitcoinInfo/>
     <BitcoinStat/>
    </>
  );
}

export default App;
