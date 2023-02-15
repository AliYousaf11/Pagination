import React from 'react'
import ReactPaginate from "react-paginate";


const Pagination = ({pageCount, changePage}) => {
  return (
    <div>
        <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}    // total pages 
        onPageChange={changePage} // onclick page number
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export default Pagination