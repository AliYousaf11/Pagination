import "./Index.css";
import React, { useState } from "react";
import FakeData from './FakeData.json'
import Pagination from './Pagination'
import DisplayUsers from "./DisplayUsers";

function Index() {
  const [users] = useState(FakeData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const userVisited = pageNumber * usersPerPage;                   // 2*2 = 4 user visted 
  const pageCount = Math.ceil(users.length / usersPerPage);        // Total Pages 50/2 = 25
  const changePage = ({ selected }) => setPageNumber(selected);    // OnClick page number selected
  
  
  return (
    <div className="Pagination">
      <h1>Pagination</h1>
      <DisplayUsers users={users} userVisited={userVisited} usersPerPage={usersPerPage}/>
      <Pagination pageCount={pageCount} changePage={changePage} />
    </div>
  );
}

export default Index;