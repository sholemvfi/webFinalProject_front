import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieList.css'
import './MovieGrid.css'
import Movie from "./Movie";
import ModalInfo from "./modal";

export default function MovieList(){
    return(
        <>
            <div className="container">
                <Movie/>
            </div>
        </>
    )
}