import './App.css';
import SideBar from './components/leftSide/SideBar';
import PlaceCard from './components/rightSide/PlaceCard';

function App() {
  return (
  <>
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
  </>
        );
}

export default App;
