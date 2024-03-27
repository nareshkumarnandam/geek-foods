import React from 'react'
import './QuoteCard.css'

const QuoteCard = (props) => {
  return (
    <div className='container'>
        <p>{props.description}</p>
        <span className='author-text'>{props.author}</span>
    </div>
  )
}

export default QuoteCard