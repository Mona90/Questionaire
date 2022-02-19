import React from 'react'
import { Link } from 'react-router-dom'

function Intro() {
  return (
    <div className='App-intro'>
        <div className='container d-flex flex-column text-center justify-content-center align-items-center h-100'>
        <h1 className='mb-5'>Business Plan/Project Questionnaire</h1>
        <Link to="/section1">      
        <button type="button" className="btn App-button">generate business plan</button>
</Link>
        </div>
    </div>
  )
}

export default Intro