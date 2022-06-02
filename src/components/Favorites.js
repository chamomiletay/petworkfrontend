import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import pawprint from './blue-pawprint.png'

function Favorites() {

  const [dogs, setDogs] = useState();
  const [favorites, setFavorites] = useState('')


  useEffect(() => {
    fetch(`https://petwork-backend.herokuapp.com/dogfacts/`)
    .then(res => res.json())
    .then(res => {
      setDogs(res.results)
    })
    .catch(console.error)
}, [])


const getFavorites = () => {

  const url= `https://petwork-backend.herokuapp.com/favorites/`

  fetch(url)
  .then(res => res.json())
  .then(res => {
    setFavorites(res)
  })
  .catch(console.error)
}

  useEffect(() => {
    getFavorites();
  }, [])



  console.log(dogs, favorites.favorites)

  if(!dogs){
    return (
    <div>
      <img className='pawprint' src={pawprint} alt='pawprint'/>
        <h2 className='title'>Favorites</h2>
      <img className='pawprint' src={pawprint} alt='pawprint'/>

      <h2>Click on a dog breed from the Dog Facts page and heart your favorite breeds!</h2>

    </div>
    )
  }

  if (!favorites){
    return (
      <div>
        <img className='pawprint' src={pawprint} alt='pawprint'/>
          <h2 className='title'>Favorites</h2>
        <img className='pawprint' src={pawprint} alt='pawprint'/>
  
        <h2>Check out the dog facts page and heart your favorite breeds!</h2>
  
      </div>
      )
  }

  return (
    <div>

      <img className='pawprint' src={pawprint} alt='pawprint'/>
        <h2 className='title'>Favorites</h2>
      <img className='pawprint' src={pawprint} alt='pawprint'/>

      <div className='gallery'>

        {dogs
        .filter((dogs) => {
          for(let i=0; i<favorites.favorites.length; i++){
            if(dogs.id.toString() === favorites.favorites[i]){
              return dogs
            }
          }

        })
        .map(dogBreed => (
          <div>
        <div 
          key={dogBreed.id}
          className="card"
        >
        <Link to={`/dogfacts/${dogBreed.id}`} key={dogBreed.id}>
        <p className="name">{dogBreed.name}</p>
        <img className="card-image" src={dogBreed.image.url} alt={dogBreed.name} />
        </Link>
        </div>
        </div>
        ))
        }
      </div>


    </div>
  )
}

export default Favorites