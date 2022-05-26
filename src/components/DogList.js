import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import SearchForm from './SearchForm'

function DogList() {

  const [dogInfo, setDogInfo] = useState('')
  const [query, setQuery] = useState('');

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
    <div>
      <SearchForm query={query} setQuery={setQuery} />
    <div className='gallery'>
      {dogInfo.filter((item) => {
        if (query === ""){
          console.log(item.name)
          return item;
        } else if(item.name.toLowerCase().includes(query.toLowerCase())){
          return item;
        }
      })
      .map(dogBreed => (
        
        <div>
        <Link to={`/dogfacts/${dogBreed.id}`} key={dogBreed.id}>
        <div 
          key={dogBreed.id}
          className="card"
        >
        
        <p className="name">{dogBreed.name}</p>
        <img className="card-image" src={dogBreed.image.url} alt={dogBreed.name} />

        </div>
        </Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export default DogList