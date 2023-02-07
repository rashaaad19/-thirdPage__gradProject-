import { AiFillDislike, AiFillLike, AiFillStar } from 'react-icons/ai'
import './PlaceCard.css'
const PlaceCard=()=>{
    return(<>
        <div id='card__container'>
            <div id='card__firstRow'>
            <img src='/assets/images/Nearby__images/1.jpg' alt='img'></img>
            </div>

            <div className='imageInfo'>
            <p id='cardHeader'>Place Name</p>
            <div className='star__container'>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            </div>
            <div id='card__par'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae condimentum lectus, non pharetra ligula. Etiam sit amet odio at tortor consectetur bibendum</p>
            </div>
            <div className='card__like'>
            <AiFillLike className='faLike'></AiFillLike>
            <AiFillDislike className='faLike'></AiFillDislike>
            </div>
            </div>

           

        </div>
    </>)
}
export default PlaceCard
