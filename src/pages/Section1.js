import React , { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from '../App';

function Section1() {
  const {data, setData} = useContext(dataContext)
  
const [value1, setValue1] = useState('both')
const [value2, setValue2] = useState('')
const [value3, setValue3] = useState('')
const answers = {
  answer1: value1,
  answer2: value2,
  answer3: value3
}


  return (
    <div className='container'>
      <div className='col-md-6 shadow p-3 mb-5 bg-body rounded my-5 mx-auto '>
        <h2 className='text-center'>Section 1</h2>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">
          Is your business model B2C or B2B or both?
            <ol type='A' className='my-2'>
              <li>B2C</li>
              <li>B2B</li>
              <li>both</li>
            </ol>
            <input type='text' onChange={(e)=> {
              setValue1(() => e.target.value.toLowerCase())
              setData({value1 : e.target.value.toLowerCase()})
            }} />
          </li>
          {value1 === 'b2b' ||value1 ===  'both' ?
          <li className="list-group-item">
          Do you target all age brackets?
            <ol type='A' className='my-2'>
              <li>yes</li>
              <li>No</li>
            </ol>
            <input type='text' onChange={(e)=> setValue2(() => e.target.value.toLowerCase())} value={value2}/>
          </li>
          : null
          }
          {value1 === 'b2c' ||value1 ===  'both' ?
          
          <li className="list-group-item">
            Do you target all industries?
            <ol type='A' className='my-2'>
                <li>yes</li>
                <li>No</li>
            </ol>
            <input type='text'onChange={(e)=> setValue3(() => e.target.value.toLowerCase())} value={value3}/>
          </li>
          : null }
        </ol>
        <Link to='/section2'>
        <button type="button" className="btn btn-danger ms-auto d-block" onClick={()=> setData(answers)}>
          Next
        <i className="fa-solid fa-arrow-right-long ms-2"></i>  
              </button>
        </Link>
      </div>
    </div>
  )
}

export default Section1