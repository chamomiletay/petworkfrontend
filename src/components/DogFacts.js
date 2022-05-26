import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function DogFacts() {
  let {id} = useParams();

  const [dog, setDog] = useState();

  useEffect(() => {
    fetch(`http://localhost:4321/dogfacts/${id}`)
    .then(res => res.json())
    .then(res => 
      setDog(res.results))
    .catch(console.error)
  }, [])

  console.log(dog.height.metric)

  if (!dog){
    <h2>The dog you are looking for is in the dog house!</h2>
  }
  return (
    <div className="details-container">
      <h2>{dog.name}</h2>
      <img className="card-image" src={dog.image.url} alt={dog.name} />
      <h3>{dog.origin}</h3> 
      <ul>
        <li>Bred for: {dog.bred_for} </li> 
        <li>Breed: {dog.breed_group}</li>
        <li>Average Life Span: {dog.life_span}</li>
        <li>Average Height: {dog.height.imperial}</li>
        <li>Average Weight: {dog.weight.imperial}</li>
      </ul>
    </div>
  )
}

export default DogFacts