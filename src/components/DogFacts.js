import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import EmptyHeart from './icons/EmptyHeart';
import FullHeart from './icons/FullHeart';



function DogFacts() {
  let {id} = useParams();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"))

  const [dog, setDog] = useState();
  const [liked, setLiked] = useState(false);


  const toggleLike = () =>{
    const url = `http://localhost:4321/dogfacts/${id}`
    
    if (userInfo){
    fetch(url, {
      method: 'POST',
    })
    .then(res => res.json())
    .then(res => {
      setLiked(res.likeStatus)
    })
    .catch(error => console.log(error))
  }
  }


  useEffect(() => {
    fetch(`http://localhost:4321/dogfacts/${id}`)
    .then(res => res.json())
    .then(res => {
      setDog(res.result)
      console.log(res)
      setLiked(res.likeStatus)     
  })
    .catch(console.error)
    // eslint-disable-next-line
  }, [])

  console.log(userInfo, liked)

  if (!dog){
    return(
    <h2>The dog you are looking for is in the dog house!</h2>
    )
  }
  
  return (
    <div className="details-container">



      <img className="dog-image" src={dog[0].image.url} alt={dog.name} />
      
      <div className="details">
        
         <div className='breed_header' onClick={toggleLike}>
          {liked ? <FullHeart /> : <EmptyHeart />}
          </div>
    
      <h2>{dog[0].name}</h2>
      <h3>{dog[0].origin}</h3> 
      <ul>
        <li className='aboutDog'>Bred for: {dog[0].bred_for} </li> 
        <li className='aboutDog'>Breed: {dog[0].breed_group}</li>
        <li className='aboutDog'>Average Life Span: {dog[0].life_span}</li>
        <li className='aboutDog'>Average Height: {dog[0].height.imperial}</li>
        <li className='aboutDog'>Average Weight: {dog[0].weight.imperial}</li>
      </ul>
      <h4>Temperament:</h4>
      <p>{dog[0].temperament}</p>
      <br/>
      <Link to='/dogfacts'>
        <h3>Back to Dog List</h3>
      </Link>
      </div>
      
    </div>
  )
}

export default DogFacts