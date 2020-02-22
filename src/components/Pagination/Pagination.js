import React from 'react'

export const Pagination = (props) => {
  const { totalDays, daysPerPage, paginate, currentPage } = props;
  const pageNumbers= [];

  //gets the number of pages needed to render the tables in groups of 5 and puts them in an array that we shall then render
  for (let i = 1; i <= Math.ceil(totalDays/ daysPerPage); i++){
    pageNumbers.push(i);
  }
  //console.log('page numbers', pageNumbers)
  //${currentPage === number && active}

  return (
    <nav >
      <ul className="pagination">
        
        {pageNumbers.map((number)=>{
          return <li key={number}className={`page-item ${currentPage === number && "active"}`}>
            <a className="page-link" href="#!" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        })}
      </ul>
    </nav>
  )
}
