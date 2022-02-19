import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from '../App';

function Section2() {
  const {data, setData} = useContext(dataContext)
  console.log('section2', data)
    const [answer, setAnswer] = useState('no')
    const [value, setValue] =  useState(0)

  return (
    <div className='container'>
      <div className='col-md-6 shadow p-3 mb-5 bg-body rounded my-5 mx-auto '>
        <h2 className='text-center'>Section 2</h2>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">
          Did you have an investment?
            <ol type='A' className='my-2'>
              <li>yes</li>
              <li>No</li>
            </ol>
            <input type='text' onChange={(e)=> setAnswer(() => e.target.value.toLowerCase())}/>
          </li>
          <li className="list-group-item">
          how much was the investment?
            <ol type='A' className='my-2'>
              <li>yes</li>
              <li>No</li>
            </ol>
            <input type="number" 
            onChange={(e) => setValue(parseInt(e.target.value))}  
              min="1" value={value} disabled={answer === 'no' ? true : false} />

          </li>
        </ol>
        <Link to="/all-answer">
        <button type="button" className="btn btn-danger ms-auto mt-3 d-block" onClick={()=>setData({...data,answer4:answer,answer5:value})}>
         Next
        <i className="fa-solid fa-arrow-right-long ms-2"></i>  
              </button>
              </Link>
      </div>
    </div>
  )
}

export default Section2