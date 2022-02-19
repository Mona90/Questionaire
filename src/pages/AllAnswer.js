import React,{useContext} from 'react'
import { dataContext } from '../App';

function AllAnswer() {
  const {data, setData} = useContext(dataContext)
console.log(data)
  return (
    <div className='container'>
    <div className='col-md-6 shadow p-3 mb-5 bg-body rounded my-5 mx-auto '>
      <h2 className='text-center'>Your Answers</h2>
      <ol className="list-group list-group-numbered">
      {data.answer1 !== '' ?
        <li className="list-group-item">
        Is your business model B2C or B2B or both?
          <p>{data.answer1}</p>
        </li>
        : null}
        {data.answer2 !== ''  ?
        <li className="list-group-item">
        Do you target all age brackets?
        <p>{data.answer2}</p>

         </li>
        : null
        }
        {data.answer3 !== ''  ?
        
        <li className="list-group-item">
          Do you target all industries?
          <p>{data.answer3}</p>

        </li>
        : null }
        {data.answer4 !== ''  ?
        
        <li className="list-group-item">
          Did you have an investment?
          <p>{data.answer4}</p>

        </li>
        : null }
        {data.answer5  ?
        
        <li className="list-group-item">
          how much was the investment?
          <p>{data.answer5}</p>

        </li>
        : null }

      </ol>
      <button type="submit" className="btn btn-danger ms-auto d-block"onClick={()=> alert('Your Data is Submited Successfuly ')} >
        Submit
      </button>
    </div>
  </div>
  )
}

export default AllAnswer