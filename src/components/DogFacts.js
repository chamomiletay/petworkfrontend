import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

function DogFacts() {
  let {id} = useParams();

  const [dog, setDog] = useState();

  useEffect(() => {
    fetch(`http://localhost:4321/dogfacts/${id}`)
    .then(res => res.json())
    .then(res => {
      setDog(res.result)     
  })
    .catch(console.error)
  }, [])


  if (!dog){
    return(
    <h2>The dog you are looking for is in the dog house!</h2>
    )
  }
  return (
    <div className="details-container">

      <img className="card-image" src={dog[0].image.url} alt={dog.name} />
      
      <div className="details">
      <h2>{dog[0].name}</h2>
      <h3>{dog[0].origin}</h3> 
      <ul>
        <li>Bred for: {dog[0].bred_for} </li> 
        <li>Breed: {dog[0].breed_group}</li>
        <li>Average Life Span: {dog[0].life_span}</li>
        <li>Average Height: {dog[0].height.imperial}</li>
        <li>Average Weight: {dog[0].weight.imperial}</li>
      </ul>
      <h4>Temperament:</h4>
      <p>{dog[0].temperament}</p>
      <br/>
      <Link to='/dogfacts'>
        <p>Back to Dog List</p>
      </Link>
      </div>
    </div>
  )
}

export default DogFacts