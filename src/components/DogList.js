import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import SearchForm from './SearchForm'
import ReactPaginate from 'react-paginate'
import pawprint from './blue-pawprint.png'
//Used this link / video to help with understanding the pagination hook: https://www.youtube.com/watch?v=HANSMtDy508

function DogList() {

  const [dogInfo, setDogInfo] = useState('')
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(0)

  const dogsPerPage = 12
  const pagesVisited = pageNumber * dogsPerPage
  const pageCount = Math.ceil(dogInfo.length / dogsPerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  const getDogInfo = () => {
    const url=`https://petwork-backend.herokuapp.com/dogfacts/`

    fetch(url)
    .then(res => res.json())
    .then(res => {
      setDogInfo(res.results)
      console.log(res.results)
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
      <img className='pawprint' src={pawprint} alt='pawprint'/>
        <h2 className='title'>Dog Facts</h2>
      <img className='pawprint' src={pawprint} alt='pawprint'/>
      <SearchForm query={query} setQuery={setQuery} />
    <div className='gallery'>
      {dogInfo.filter((item) => {
        if (query === ""){
          return item;
        } else if(item.name.toLowerCase().includes(query.toLowerCase())){
          return item;
        }
      })
      .slice(pagesVisited, pagesVisited + dogsPerPage)
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
      ))}
     
    </div>
    <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export default DogList