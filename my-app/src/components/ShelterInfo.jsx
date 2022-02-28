import React, { Fragment, useState } from "react";
import FiltersInShelterDetails from "./FiltersInShelterDetails";
import { Link } from "react-router-dom";
import ShelterData from "./ShelterData";

// estilos
import { DivContenedor } from "../Styles/StyledShelterDetails";
import {
  StyledCard,
  StyledCardContainer,
  ImgCard,
} from "../Styles/StyledCards.js";
import { StyleButton, StyleButtonMini } from "../Styles/StyledButtons";
import "../Styles/Styles.css";

const ShelterInfo = ({ Data, pets, input, setInput }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(2);

  const [pageNumberLimit, setpageNumberLimit] = useState(2);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(2);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(pets.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pets.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pets.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };
 
  return (
    <div>
      <h1>Hola, soy la info del refugio</h1>
      <ShelterData Data={Data}/>
      <div>
        <StyleButtonMini>Donate</StyleButtonMini>
      </div>
      <DivContenedor>
        <FiltersInShelterDetails input={input} setInput={setInput}/>

        <div>
          <StyledCardContainer key={Math.random(5)}>
            {typeof pets !== "string" ? (
              currentItems?.map((p) => (
                <Fragment key={p.id}>
                  <Link to={`/details/${p.id}`}>
                    <StyledCard>
                      <h1>{p.name}</h1>

                      {/* <p>{p.description}</p> */}
                      <ImgCard src={p.image} />

                      <br />
                    </StyledCard>
                  </Link>
                </Fragment>
              ))
            ) : typeof pets === "string" ? (
              <h1> {pets}</h1>
            ) : (
              <h1> Cargando datos</h1>
            )}
            <div>
              <ul className="pageNumbers">
                <li>
                  <button
                    onClick={handlePrevbtn}
                    disabled={currentPage === pages[0] ? true : false}
                  >
                    Prev
                  </button>
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}

                <li>
                  <button
                    onClick={handleNextbtn}
                    disabled={
                      currentPage === pages[pages.length - 1] ? true : false
                    }
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
            {/* <button onClick={handleLoadMore} className="loadmore">
                        Load More
                        </button> */}
          </StyledCardContainer>
        </div>
      </DivContenedor>
    </div>
  );
};

export default ShelterInfo;
