import React, {useState} from "react";
// import { FaSearch } from "react-icons/fa";
import {BreadcrumbItem, Col, Container, Row} from "react-bootstrap";
import {Link, NavLink, Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddingForm.css';
import axios from "axios";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import { Children } from "react";

export default function AddingForm(){
    const [title, setTitle] = useState();
    const [year, setYear] = useState();
    const [desc, setDesc] = useState();
    const [image, setImage] = useState();

    const handleAddMovie = () => {
        
        axios
      .post("http://localhost:8080/api/movie/create.php", {
        name: title,
        year: year,
        description: desc,
        img: image,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // console.log(error);
      });
        
    }

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleYear = (event) => {
        setYear(event.target.value);
    }
    const handleDesc = (event) => {
        setDesc(event.target.value);
    }
    const handleImage = (event) => {
        setImage(event.target.value);
    }
    return(
        <>
            <form className={"text-dark add-container"}>
                <Container>
                    <h2 className={"py-5"}>Add new Movie</h2>
                    <Row>
                        <Col >
                            <label htmlFor="name" className={"label"}>Enter movie name</label><br/>
                            <input onChange={handleTitle} 
                            type="text" placeholder={"movie name "} name={"name"} className={"p-2 inp"}required={true}/><br/>
                            <label htmlFor="year" className={"label"}>Enter movie year</label><br/>
                            <input onChange={handleYear}
                            type="text" placeholder={"movie year "} name={"year"} className={"p-2 inp"} required={true}/><br/>
                            <label htmlFor="poster" className={"label"}>Enter movie poster</label><br/>
                            <input onChange={handleImage}
                            type="text" placeholder={"poster "} name={"poster"} className={"p-2 inp"} required={true}/><br/>
                        </Col>
                        <Col>
                            <label htmlFor="desc" className={"label"}>Enter Movie Description</label><br/>
                            <textarea onChange={handleDesc}
                            name="desc" id="descc" className={"p-2 inp"} placeholder={"movie description"} cols="50" rows="5"/>
                            <button onClick={handleAddMovie} type="submit" className={"bg-warning py-2 ml-5"}
                                    style={{border:"none", borderRadius:"6px", boxShadow:"2px 2px 10px yellow"}}>Add Movie</button>
                            <Link to="/home" className={"bg-primary py-2"}
                            style={{marginLeft:"8px",borderRadius:"6px", boxShadow:"1px 1px 5px blue", color:"white"}}>Home</Link>
                        </Col>
                    </Row>
                </Container>
            </form>
        </>
    )
}