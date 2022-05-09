import React, { useContext } from "react";
import { StarsWarContext } from "../../context/stars-wars.contex";
import '../pagination/pagination.styles.scss';

const Pagination = () => {
  const { count, getPeopleListByPage, currentPage } = useContext(StarsWarContext);
  const pageNumbers: number[] = [];
  const listPerPage: number = 10;

  const addPageNumbers = () => {
    for(let i = 1; i <= Math.ceil(count/listPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  count >= listPerPage ? addPageNumbers() : pageNumbers.push(1);
  

  return (
    <nav>
      <div>{`Showing ${count < listPerPage ? count : listPerPage} of ${count}`}</div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} style={{ backgroundColor : `${currentPage === number ? '#ccc' : ''}`}}>
            {currentPage === number ? (
              <span style={{ cursor: 'none' }}>{number}</span>
            ) : (
              <span onClick={() => getPeopleListByPage(number)}>{number}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;