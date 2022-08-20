import React, {useState} from 'react'

import { useHistory } from 'react-router-dom'

import './Home.css'

const Home = () => {

    // let navigate = useNavigate()
    let history = useHistory()

    const [searchTerm, setSearchTerm] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [terms, setTerms] = useState({name: '', number: '', searchTerm: ''})
    
    

    // const cred = {searchTerm, name, number}

    const handleSearchTerm = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    const handleName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleNumber = (e) => {
        e.preventDefault()
        setNumber(e.target.value)
    }

    const handleSubmition = () => {
        setTerms(terms.name = name, terms.number = number, terms.searchTerm = searchTerm)
        // console.log(terms)
        setSearchTerm('')
        setName('')
        setNumber('')        
        history.push({
            pathname: "/map",
            state: {
                state: terms
            }
        })
    }

  return (
    <>
    <div className='container1'>
        <h1 className='heading'>OtterMap</h1>
        <input className='searchBar' onChange={handleSearchTerm} value={searchTerm} type="text" id="search" placeholder='Search' />
    </div>
    <div className='container2'>
    <input className='nameBar' value={name} onChange={handleName} type="text" id="name" placeholder='Name' />
    <input className='numBar' type="text" value={number} onChange={handleNumber} id="number" placeholder='Number' />
    <button className='btn' onClick={handleSubmition}>Submit</button>
    </div>
    </>
  )
}

export default Home