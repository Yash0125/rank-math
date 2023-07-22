import "./App.css";
import BitcoinInfo from "./components/bitcoininfo/BitcoinInfo";
import BitcoinStat from "./components/bitcoinstat/BitcoinStat";
import BitcoinTrade from "./components/bitcointrade/BitcoinTrade";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
     <Navigation/>
     <BitcoinInfo/>
     <BitcoinStat/>
     <BitcoinTrade/>
     <Footer/>
    </>
  );
}

export default App;
