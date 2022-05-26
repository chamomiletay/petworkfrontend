import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function DogList() {

  const [dogInfo, setDogInfo] = useState('')


  const getDogInfo = () => {
    const url=`http://localhost:4321/dogfacts/`

    fetch(url)
    .then(res => res.json())
    .then(res => {
      setDogInfo(res.results)
    })
    .catch(console.error)
  }


  useEffect(() => {
    getDogInfo();
  }, [])

console.log(dogInfo)


  if (!dogInfo) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='gallery'>
      {dogInfo.map(dogBreed => (
        <div 
          key={dogBreed.id}
          className="card"
        >
        <p className="name">{dogBreed.name}</p>
        <Link to={`/dogfacts/${dogBreed.id}`} key={dogBreed.id}>
        <img className="card-image" src={dogBreed.image.url} alt={dogBreed.name} />
        </Link>
        </div>
      ))}
    </div>
  )
}

export default DogList