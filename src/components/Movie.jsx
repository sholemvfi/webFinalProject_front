import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieList.css';
import './MovieGrid.css';
import axios from "axios";
import ModalInfo from "./modal";
import {  } from "bootstrap";

// const movie = [
//     {
//         movieId: 1,
//         title: "Fight Club",
//         year: "1999",
//         desc: "everything is a copy of a copy of a copy",
//         imgSrc:
//             "https://static.displate.com/280x392/displate/2021-06-15/8614d9ab112d73ba66f445fcf80d3ad6_4974da1795443b075b443b7f49989fe1.jpg"
//     },
//     {
//         movieId: 2,
//         title: "Inception",
//         year: "2010",
//         desc: "usual nolan movie. confusing af but lovely",
//         imgSrc:
//           "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg" ,
//     },
//     {
//         movieId: 3,
//         title: "Spiderman",
//         year: "2021",
//         desc: "multiverse came true thanks marvel",
//         imgSrc:
//             "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
//     },
//     {
//         movieId: 4,
//         title: "Attack on Titan",
//         year: "2008",
//         desc: "eren jeeeaager vs the whole world ;)))",
//         imgSrc:
//             "https://m.media-amazon.com/images/I/81dH7-pkjiL._AC_SL1500_.jpg",
//     },
// ];

const MovieCard = ({ show, movie }) => {

    const [modalShow, setModalShow] = useState(false);
    const toggleModal = () => {
        setModalShow(!modalShow)
    };


    var style = show ? "movieGrid" : "movieList";

    return (
        <Col className={`m-2 ${style}`} onClick={toggleModal}>
            <img className="movieImg"
                src={movie.img}
                alt=""
            />
            <h3 className="card-title name2">
                {movie.name}<span> -  {movie.year}</span>
            </h3>
            <ModalInfo
                id={movie.id}
                show={modalShow}
                onHide={toggleModal}
                title={movie.name}
                imgSrc={movie.img}
                year={movie.year}
                desc={movie.description}
            />
        </Col>
    )
}

export default function Movie({ show }) {

    const [movies, setMovies] = useState();

    useEffect(() => {
        if (!movies) loadData();
      }, []);
      const loadData = async () => {
        const result = await axios.get("http://localhost:8080/api/movie/read.php");
        setMovies(result.data.data);
      };
    
      const [input, setInput] = useState();

      const  searchMethod = async () => {
        const searchResult = await 
        axios
        .get(`http://localhost:8080/api/movie/search.php?searchquery=${input}`
        );
        setMovies(searchResult.data.data);
      };


    return (
        <>
            <div className={"container"}>
            <form className={"position-absolute end-0 me-5"} style={{position:"relative",top:"15px"}}>
                <input type="text" placeholder={"search by name or year"} name={"search"} className={"p-1 me-3"}
                style={{border:"none", borderRadius:"10px",boxShadow:"1px 1px 5px gray"}} onChange={(e)=>{setInput(e.target.value)}}/>
                <Button className={"btn-warning btn"} style={{border:"none", borderRadius:"10px"}}
                 onClick={searchMethod}>Search</Button>
            </form>
                {
                movies &&
                movies.map((m) => {
                    return (
                        <MovieCard show={show} movie={m} />
                    );
                })}
            </div>
        </>
    )
};