import './App.css';
import SideBar from './components/leftSide/SideBar';
import Navbar from './components/Navbar';
import PlaceCard from './components/rightSide/PlaceCard';
import Footer from './components/footer/Footer'

function App() {
  return (
  <>
    <Navbar></Navbar>
<div id='overAll__container'>
  <div id='leftSide__container'>
    <SideBar></SideBar>
  </div>
  <div id='rightSide__container'>
    <PlaceCard></PlaceCard>
    <PlaceCard></PlaceCard>
    <PlaceCard></PlaceCard>
    <PlaceCard></PlaceCard>
    <PlaceCard></PlaceCard>
    <PlaceCard></PlaceCard>

  </div>
</div>
<Footer></Footer>
  </>
        );
}

export default App;
