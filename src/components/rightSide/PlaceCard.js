import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import "./PlaceCard.css";
const PlaceCard = (props) => {
  const [beachPlaces, setBeachPlaces] = useState([]);
  async function fetchBeachPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/categorySearch/Beach.json?limit=100&lat=31.261193878823768&lon=32.306969060980315&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`);

    const data = await response.json();

    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.streetName,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
      };
    });
    
    setBeachPlaces(transformedData);
    console.log(transformedData)
  }

  useEffect(() => {
    fetchBeachPlaces();

  }, []);

  return (
    <>
      {beachPlaces.map((takeAwayData) => (
        <div id="card__container">
          <div id="card__firstRow">
            <img src="/assets/images/Nearby__images/1.jpg" alt="img"></img>
          </div>
          <div className="imageInfo">
            <p id="cardHeader">{takeAwayData.header}</p>
            <div className="star__container">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
            <div id="card__par">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                vitae condimentum lectus, non pharetra ligula. Etiam sit amet
                odio at tortor consectetur bibendum
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default PlaceCard;
