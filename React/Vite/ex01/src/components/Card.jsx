import React from 'react'

function Card({title, description, button}) {
  return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">{button}</a>
        </div>
    </div>
  )
}

export default Card