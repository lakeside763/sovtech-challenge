import React, { useContext } from "react";
import { StarsWarContext } from "../../context/stars-wars.contex";
import '../pagination/pagination.styles.scss';

const Pagination = () => {
  const { count, getPeopleListByPage } = useContext(StarsWarContext);
  const pageNumbers: number[] = [];
  const listPerPage: number = 10;

  for(let i = 1; i < Math.ceil(count/listPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <span onClick={() => getPeopleListByPage(number)}>{number}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;