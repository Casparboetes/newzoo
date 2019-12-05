// Component to practice with hooks

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchOneGame } from '../store/detail-page/actions'
import { useHistory } from 'react-router-dom'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = value => setSearchInput(value)

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(fetchOneGame(searchInput))
    history.push(`/games/${searchInput}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        value={searchInput}
        placeholder={'Search for a game...'}
        onChange={event => handleChange(event.target.value)}
      />
      <input style={{ display: 'none' }} type='submit' value='Submit' />
    </form>
  )
}

export default SearchBar
