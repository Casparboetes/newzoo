import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './GameCard.scss'

const GameCard = ({ game, currentRank }) => {
  return (
    <li className='game'>
      <Link to={`/games/${game}`}>
        <img
          className='game-image'
          src={`https://api-test.newzoo.com:443/v1.0/metadata/game/boxart?name=${game}`}
          alt={`cover ${game}`}
        ></img>
        <div className='top-right' style={{ fontSize: '1.2rem' }}>
          {currentRank}
        </div>
      </Link>
    </li>
  )
}

GameCard.propTypes = {
  game: PropTypes.string.isRequired,
  currentRank: PropTypes.number.isRequired,
  index: PropTypes.string,
}

export default GameCard
