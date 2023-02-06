import './SideBar.css'
import {AiFillFilter} from 'react-icons/ai'
const SideBar=()=>{
    return(
        <>
        <div id='sidebar__container'>
        
        <div id='firstRow'>
        <p>Filter</p>
        <AiFillFilter></AiFillFilter>
        </div>
        <div className='hrContainer'>
        <hr></hr>
        </div>
        <div id='secRow'>
        <p className='filterHeader'>Raiting</p>
        <div className='filterItems'>
        <p>One Star</p>
        <p>Two Stars</p>
        <p>Three Stars</p>
        <p>Four Stars</p>
        <p>Five Stars</p>
        </div>
        </div>
        <div className='hrContainer'>
        <hr></hr>
        </div>
        <div id='thirdRow'>
        <p className='filterHeader'>Distance</p>
        <div className='filterItems'>
        <p>Less than 1km</p>
        <p>Less than 3km</p>
        <p>Less than 5km</p>
        <p>Less than 7km</p>
        <p>More than 7km</p>
        </div>
        </div>
        <div className='hrContainer'>
        <hr></hr>
        </div>
        <div id='fourthRow'>
        <p>Gardens</p>
        <p>Resturants</p>
        <p>Museums</p>
        <p>Historic Buildings</p>
        <p>Beaches</p>
        <p>Markets</p>
        </div>
        </div>

        <div id='button__container'>
        <div className='searchButton'>
        Search
        </div>
        </div>
        </>
    )
}
export default SideBar