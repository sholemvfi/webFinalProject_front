import React, {useState} from "react";
// import { FaSearch } from "react-icons/fa";
import AddingForm from "./AddingForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import './AddingForm.css'
import MovieList from "./MovieList";
import {Link, NavLink, Router} from "react-router-dom";
import Movie from "./Movie";

export default function Header(){

    const [isActive, setActive] = useState(true);
    const gridView = () => {
        if (!isActive)
        setActive(true);
    };

    const listView = () =>{
        if(isActive)
        setActive(false);
    };

    return(
        <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand title={"movie recommendation"}>Movie Website</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to="/" className="link">Home</Link>
                            <Link to="/" className="link" onClick={gridView}>Grid View</Link>
                            <Link to="/" className="link" onClick={listView}>List View</Link>
                            <Link to="/addMovie" className="link">Adding Movie</Link>
                        </Nav>
                    </Container>
                </Navbar>
            <Movie show={isActive} />
        </>
    )

}