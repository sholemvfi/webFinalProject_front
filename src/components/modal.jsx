import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from "react-bootstrap";
import {Link, NavLink, Router} from "react-router-dom";
import axios from "axios";

export default function ModalInfo(props) {

    const reload=()=>window.location.reload();

    const func=()=>{
        deleteBlogPosts();
        reload();
    }

    // console.log(props.id);

    const deleteBlogPosts = () => {
        axios.delete("http://localhost:8080/api/movie/delete.php/?id="+props.id)
        .then((response) => {
          console.log(`${response} request deleted`)
        })
        .catch((err) => {
          console.log(err.response)
        })
        }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onClick={e=>e.stopPropagation()}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Name :  {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={props.imgSrc} style={{height:"250px"}} alt={""}/>
                <div style={{float:"right", margin:"60px 100px 0 0"}}>
                    <h4>movie year : {props.year}</h4>
                    <p>
                        description : {props.desc}
                    </p>
                    <span>{props.num}</span>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Link to="" className={"btn-warning py-2 btn"} onClick={func}>delete</Link>
                <Button onClick={props.onHide}>Close</Button>
                <Link className={"btn-warning py-2 btn"} to="/edit">update</Link>
            </Modal.Footer>
        </Modal>
    );
}

